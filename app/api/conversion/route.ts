import { isIP } from 'node:net'
import { NextResponse, type NextRequest } from 'next/server'
import { OAI_PIXEL_ID } from '@/components/oai-pixel'

/*
  Conversions API von OpenAI: dieselbe Meldung "Anfrage abgeschickt", die das
  Pixel aus dem Browser schickt, geht von hier noch einmal von Server zu
  Server an OpenAI (12.11.2026). OpenAI empfiehlt das, damit eine Anfrage
  auch dann gezaehlt wird, wenn der Browser die Meldung des Pixels verliert.

  Das ist der einzige Server-Code der Seite. Deshalb gilt hier streng:

  WER DARF AUFRUFEN
  - Nur die eigene Seite: Origin muss zum Host der Anfrage passen. Fremde
    Seiten koennen den Besucher-Browser so nicht vorschicken.
  - Nur mit Einwilligung: Der Browser ruft die Funktion nur auf, wenn
    "Marketing" eingeschaltet ist (components/anfrage-melden.ts). Zusaetzlich
    prueft die Funktion selbst das Cookie __oaiq_consent, das OpenAIs Skript
    bei Zustimmung setzt. Fehlt es, passiert nichts.

  WAS DER AUFRUFER BESTIMMEN KANN
  - Nur die Kennung der Meldung (eine UUID). Ziel, Ereignisart und Aufbau
    stehen fest im Code. Als offene Weiterleitung taugt die Funktion nicht.

  WAS AN OPENAI GEHT
  - Ereignis "lead_created", Zeitpunkt, Adresse der Seite ohne Parameter.
  - Aus den Cookies des Pixels: Klick-ID der Anzeige (__oppref) und
    Browser-ID (__obref), soweit vorhanden.
  - IP-Adresse und Browserkennung (User-Agent) des Besuchers.
  - KEINE Angaben aus dem Formular. Die haengt nur das Pixel im Browser an
    (automatisches Matching). Damit dessen vollstaendigere Meldung zuerst
    ankommt, wartet die Funktion kurz: OpenAI wertet bei doppelter Kennung
    die zuerst eingetroffene Meldung aus, und das Pixel sendet gemessen
    rund eine Sekunde nach dem Absenden.

  DER SCHLUESSEL
  - OPENAI_CONVERSIONS_API_KEY liegt nur bei Vercel (Production, als
    "Sensitive"). Ohne Schluessel tut die Funktion nichts. Er wird nie
    zurueckgegeben und nie protokolliert.

  PROTOKOLL
  - Geloggt wird nur der Statuscode von OpenAI und eine entschaerfte
    Fehlermeldung (Ziffern und lange Zeichenketten unkenntlich) — keine
    IP-Adresse, keine Kennung, keine Kontaktdaten.
*/
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 15

const ZIEL = 'https://bzr.openai.com/v1/events'
const VORSPRUNG_PIXEL_MS = 3000
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
// Kennungen aus den Cookies: nur harmlose Zeichen, begrenzte Laenge.
const KENNUNG = /^[A-Za-z0-9._~:-]{1,512}$/

const nichts = () => new NextResponse(null, { status: 204 })
const abgelehnt = (status: number) => NextResponse.json({ ok: false }, { status })

/* Nur fuer den lokalen Test: ein Ersatz-Ziel auf dem eigenen Rechner.
   Greift ausschliesslich bei einer Loopback-Adresse, kann also auch durch
   eine falsch gesetzte Variable nie nach aussen zeigen. */
function ziel(): string {
  const test = process.env.OAI_CAPI_TEST_URL
  return test && /^http:\/\/127\.0\.0\.1:\d{2,5}\//.test(test) ? test : ZIEL
}

function entschaerfen(text: string): string {
  return text
    .replace(/[A-Za-z0-9._~:%+/=-]{24,}/g, '[…]')
    .replace(/\d/g, '#')
    .slice(0, 300)
}

function besucherIp(req: NextRequest): string | undefined {
  const roh = req.headers.get('x-real-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0]
  const ip = roh?.trim()
  if (!ip || !isIP(ip)) return undefined
  // Loopback ist die Adresse des eigenen Rechners (lokaler Test), kein Besucher.
  if (ip === '::1' || ip.startsWith('127.')) return undefined
  return ip
}

export async function POST(req: NextRequest) {
  // 1. Nur die eigene Seite.
  const host = req.headers.get('host')
  const origin = req.headers.get('origin')
  let originHost: string | null = null
  try { originHost = origin ? new URL(origin).host : null } catch { /* unlesbar: abgelehnt */ }
  if (!host || !originHost || originHost !== host) return abgelehnt(403)
  const fetchSite = req.headers.get('sec-fetch-site')
  if (fetchSite && fetchSite !== 'same-origin') return abgelehnt(403)

  // 2. Nur die Kennung der Meldung, sonst nichts.
  const text = await req.text()
  if (text.length > 200) return abgelehnt(400)
  let id: unknown
  try { id = (JSON.parse(text) as { id?: unknown }).id } catch { return abgelehnt(400) }
  if (typeof id !== 'string' || !UUID.test(id)) return abgelehnt(400)

  // 3. Nur mit Einwilligung.
  if (req.cookies.get('__oaiq_consent')?.value !== 'true') return nichts()

  // 4. Ohne Schluessel gibt es nichts zu senden.
  const schluessel = process.env.OPENAI_CONVERSIONS_API_KEY
  if (!schluessel) return nichts()

  const zeitpunkt = Date.now()

  // Seite, von der die Anfrage kam — nur Adresse und Pfad, ohne Parameter.
  let seite = `https://${host}/`
  try {
    const ref = new URL(req.headers.get('referer') ?? '')
    if (ref.host === host) seite = `${ref.origin}${ref.pathname}`
  } catch { /* kein brauchbarer Referer: Startadresse genuegt */ }

  const oppref = req.cookies.get('__oppref')?.value
  const obref = req.cookies.get('__obref')?.value
  const ip = besucherIp(req)
  const agent = req.headers.get('user-agent')?.slice(0, 512)

  const nutzer: Record<string, string> = {}
  if (obref && KENNUNG.test(obref)) nutzer.obref = obref
  if (ip) nutzer.ip_address = ip
  if (agent) nutzer.user_agent = agent

  const ereignis: Record<string, unknown> = {
    id,
    type: 'lead_created',
    timestamp_ms: zeitpunkt,
    source_url: seite,
    action_source: 'web',
    // Wie beim Pixel: keine spaetere Nutzung fuer personenbezogene Werbung.
    opt_out: true,
    data: { type: 'customer_action' },
  }
  if (oppref && KENNUNG.test(oppref)) ereignis.oppref = oppref
  if (Object.keys(nutzer).length > 0) ereignis.user = nutzer

  // Dem Pixel den Vortritt lassen (siehe oben).
  await new Promise((fertig) => setTimeout(fertig, VORSPRUNG_PIXEL_MS))

  try {
    const antwort = await fetch(`${ziel()}?pid=${encodeURIComponent(OAI_PIXEL_ID)}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${schluessel}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ validate_only: false, events: [ereignis] }),
      signal: AbortSignal.timeout(6000),
      cache: 'no-store',
    })
    if (!antwort.ok) {
      const grund = entschaerfen(await antwort.text().catch(() => ''))
      console.error(`conversion: OpenAI antwortet ${antwort.status} ${grund}`)
      return abgelehnt(502)
    }
    return NextResponse.json({ ok: true })
  } catch (fehler) {
    console.error(`conversion: nicht erreichbar (${fehler instanceof Error ? fehler.name : 'Fehler'})`)
    return abgelehnt(502)
  }
}
