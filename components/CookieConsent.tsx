'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import { OAI_PIXEL_ID } from './oai-pixel'

const GA_ID = 'G-MCG3V1FK4Y'
const SPEICHER = 'cookie-consent'

/*
  Mess-Pixel von OpenAI fuer die Anzeigen in ChatGPT (12.11.2026).

  Die Pixel-ID steht in oai-pixel.ts (kein Geheimnis, siehe dort). Der
  Conversions-API-Schluessel ist ein Geheimnis und liegt nur bei Vercel; ihn
  benutzt allein die Server-Funktion app/api/conversion/route.ts.

  Fuer diesen Dienst gilt:
    Zweck           Messen, ob eine Anfrage auf eine unserer Anzeigen in
                    ChatGPT zurueckgeht.
    Rechtsgrundlage Einwilligung, Art. 6 Abs. 1 lit. a DSGVO; fuer die
                    Cookies § 25 Abs. 1 TDDDG.
    Was fliesst     Bei jedem Laden einer Seite: IP-Adresse, Browser und
                    Betriebssystem, Seitenadresse ohne Parameter, Zeitpunkt,
                    die beiden Kennungen unten. Beim Absenden einer Anfrage
                    zusaetzlich: E-Mail, Telefon und Name als SHA-256-Wert,
                    der Ort im Klartext ("automatisches erweitertes
                    Matching", vom Betreiber am 12.11.2026 eingeschaltet).
                    Alles am lokalen Build im Browser gemessen.
    Speicherort     Cookies im Browser des Besuchers (__oppref 30 Tage,
                    __obref 1 Jahr, __oaiq_consent 30 Tage) und die
                    gemeldeten Ereignisse bei OpenAI.
    Loeschfrist     Cookies: siehe oben, sofort bei Widerruf. Bei OpenAI:
                    nach deren Bedingungen — eine Frist nennt die
                    Entwicklerdoku nicht (Stand 12.11.2026, nicht geprueft).
    Vertrag         Kein Auftragsverarbeitungsvertrag: OpenAI verarbeitet
                    nach eigenen Bedingungen als eigener Verantwortlicher.
                    Vom Betreiber am 12.11.2026 so freigegeben.

  Geladen wird das Skript ausschliesslich bei eingeschaltetem "Marketing".
*/
const OAI_SDK = 'https://bzrcdn.openai.com/sdk/oaiq.min.js'

/*
  Cookie-Einwilligung mit Auswahl pro Kategorie.

  Vorher war das eine Ja/Nein-Entscheidung. Das ist zu grob: wer die
  Reichweitenmessung erlauben, aber keine Werbesignale senden will, hatte
  keine Wahl. Jetzt gibt es je Kategorie einen Schalter und einen Knopf
  "Auswahl speichern" — dazu weiterhin "Alle akzeptieren" und "Nur
  notwendige" gleich gross nebeneinander, damit Zustimmen und Ablehnen
  denselben Aufwand kosten.

  WAS DIE SEITE TATSAECHLICH LAEDT (im Code nachgezaehlt, nicht geraten):

    - Google Analytics 4 (GA_ID) — laedt nur bei "Statistik". Die
      Werbesignale an Google (ad_storage, ad_user_data,
      ad_personalization) stehen seit 12.11.2026 fest auf "verweigert":
      Es laeuft keine Google-Werbung, die sie nutzen koennte. Kommt sie
      spaeter, gehoeren die Signale wieder unter "Marketing" — mit neuer
      FASSUNG, damit neu gefragt wird.
    - Mess-Pixel von OpenAI (OAI_PIXEL_ID) — laedt nur bei "Marketing".
    - Vercel Analytics — laeuft ohne Cookies und ohne wiedererkennbare
      Kennung, braucht daher keine Einwilligung.
    - Schriften: next/font/google liefert sie beim Bauen mit aus, es geht
      keine Anfrage an Google.
    - Cal.com und der Blog sind reine Links, keine Einbettung.
    - Web3Forms bekommt nur beim Absenden des Formulars Daten — vom
      Nutzer ausgeloest, deshalb technisch notwendig.
    - Der YouTube-Zweig in scroll-expansion-hero.tsx ist toter Code: die
      Videos liegen als MP4 in public/.

  Daraus folgen genau drei Kategorien, und keine erfundene vierte.
*/

type Auswahl = { statistik: boolean; marketing: boolean }
const KEINE: Auswahl = { statistik: false, marketing: false }
const ALLE: Auswahl = { statistik: true, marketing: true }

/*
  Fassung der Einwilligung. Sie steigt, wenn eine Kategorie mehr umfasst
  als zuvor.

  Fassung 2 (12.11.2026): "Marketing" umfasst jetzt das Pixel von OpenAI
  samt Weitergabe von Formularangaben. Bis dahin stand dort, es sei nichts
  angeschlossen. Wer damals "Marketing" eingeschaltet hat, hat dem Neuen
  also nicht zugestimmt — eine Einwilligung gilt nur fuer den bestimmten
  Fall und in informierter Weise (Art. 4 Nr. 11 DSGVO). Deshalb:
    - Alte Eintraege mit Marketing = an werden als "Marketing aus" gelesen,
      und das Fenster erscheint einmal neu.
    - Die Wahl bei "Statistik" bleibt, daran hat sich nichts geaendert.
    - Wer abgelehnt hatte, wird nicht erneut gefragt.
*/
const FASSUNG = 2
type Gelesen = { wahl: Auswahl; neuFragen: boolean }

/* Die Texte im Fenster sind bewusst sachlich und in Fachsprache gehalten
   (Vorgabe des Betreibers, 12.11.2026): Dienst, Zweck, verarbeitete Daten,
   Empfaenger. Keine Erzaehlsaetze.

   Hinter dem Bindestrich von "E-Mail" steht ein unsichtbarer Wortverbinder
   (U+2060). Ohne ihn bricht die Zeile nach "E-" um, und das "E-" haengt
   allein am Zeilenende. */
type Kategorie = {
  id: 'notwendig' | 'statistik' | 'marketing'
  titel: string
  zweck: string
  eintraege: { name: string; dauer: string; was: string }[]
}

const KATEGORIEN: Kategorie[] = [
  {
    id: 'notwendig',
    titel: 'Technisch notwendig',
    zweck: 'Erforderlich für den Betrieb der Website und die Speicherung Ihrer Auswahl. Nicht deaktivierbar.',
    eintraege: [
      { name: 'cookie-consent', dauer: 'bis zum Widerruf', was: 'Speichert Ihre Auswahl im localStorage Ihres Browsers. Keine Übertragung an uns.' },
      { name: 'Formularversand', dauer: 'kein Cookie', was: 'Beim Absenden eines Formulars werden die Angaben an den Versanddienst Web3Forms übermittelt.' },
    ],
  },
  {
    id: 'statistik',
    titel: 'Statistik',
    zweck: 'Google Analytics 4 (Reichweitenmessung): Auswertung von Seitenaufrufen und Besucherquellen. Empfänger: Google Ireland Limited; eine Verarbeitung in den USA ist möglich.',
    eintraege: [
      { name: '_ga', dauer: '2 Jahre', was: 'Google Analytics: Unterscheidung von Besuchern. Die IP-Adresse wird gekürzt.' },
      { name: `_ga_${GA_ID.replace('G-', '')}`, dauer: '2 Jahre', was: 'Google Analytics: Sitzungsstatus.' },
    ],
  },
  {
    id: 'marketing',
    titel: 'Marketing',
    zweck: 'OpenAI Measurement Pixel (Conversion-Tracking): Messung, ob Anzeigen in ChatGPT zu Anfragen führen. Verarbeitet werden Nutzungsdaten sowie bei einer Anfrage E-\u2060Mail-Adresse, Telefonnummer und Name in gehashter Form (SHA-256) und der angegebene Ort. Empfänger: OpenAI; eine Verarbeitung in den USA ist möglich.',
    eintraege: [
      { name: 'Advanced Matching', dauer: 'kein Cookie', was: 'OpenAI: Beim Absenden einer Anfrage werden E-\u2060Mail-Adresse, Telefonnummer und Name im Browser gehasht (SHA-256) und übermittelt, der Ort ungehasht. OpenAI gleicht die Hashwerte mit eigenen Nutzerdaten ab. Nachricht, Anlass, Datum und Gästezahl werden nicht übermittelt.' },
      { name: 'Conversions API', dauer: 'kein Cookie', was: 'OpenAI: Das Conversion-Ereignis wird zusätzlich serverseitig übermittelt. Dabei gehen IP-Adresse, User-Agent, Klick-ID und Browser-ID an OpenAI, keine Formulardaten.' },
      { name: '__oppref', dauer: '30 Tage', was: 'OpenAI: Klick-ID der Anzeige. Wird nur bei Aufruf über eine Anzeige in ChatGPT gesetzt.' },
      { name: '__obref', dauer: '1 Jahr', was: 'OpenAI: zufällige Browser-ID für diese Website.' },
      { name: '__oaiq_consent, oaiq_consent, oaiq_cs', dauer: '30 Tage bzw. bis zum Widerruf', was: 'OpenAI: Status Ihrer Einwilligung (Cookie, localStorage, sessionStorage).' },
      { name: '__cf_bm, _cfuvid', dauer: '30 Minuten bzw. Sitzung', was: 'Cloudflare (CDN von OpenAI, bzrcdn.openai.com): Schutz vor automatisierten Zugriffen.' },
    ],
  },
]

function setzeAttribut(gesetzt: boolean) {
  document.documentElement.dataset.cookieConsent = gesetzt ? 'set' : 'none'
}

function lesen(): Gelesen | null {
  try {
    const roh = localStorage.getItem(SPEICHER)
    if (roh === null) return null
    // Die aelteste Fassung kannte nur 'accepted'/'declined'.
    if (roh === 'declined') return { wahl: KEINE, neuFragen: false }
    const o = roh === 'accepted' ? { statistik: true, marketing: true } : JSON.parse(roh)
    // Zustimmung zu "Marketing" zaehlt nur aus der aktuellen Fassung —
    // siehe FASSUNG oben.
    const aktuell = Number(o.fassung) >= FASSUNG
    return {
      wahl: { statistik: !!o.statistik, marketing: !!o.marketing && aktuell },
      neuFragen: !!o.marketing && !aktuell,
    }
  } catch {
    return null
  }
}

function loescheGoogleCookies() {
  const basis = location.hostname.replace(/^www\./, '')
  for (const roh of document.cookie.split(';')) {
    const name = roh.trim().split('=')[0]
    if (!/^(_ga|_gid|_gat|_gcl)/.test(name)) continue
    // Google setzt auf die Basisdomain; die Varianten decken localhost
    // und Vorschau-Domains mit ab.
    for (const d of ['', `; domain=${location.hostname}`, `; domain=.${basis}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`
    }
  }
}

/*
  Beendet die Messung fuer OpenAI und raeumt weg, was das Skript angelegt
  hat. Laut OpenAI-Doku loescht "consent false" die beiden Mess-Cookies und
  stoppt jeden weiteren Versand. Das Skript merkt sich die Ablehnung dabei
  selbst noch einmal (Cookie __oaiq_consent, localStorage oaiq_consent) —
  auch das kommt weg: Unser eigener Eintrag "cookie-consent" reicht als
  Gedaechtnis, und ohne Einwilligung soll von OpenAI nichts liegen bleiben.
*/
function beendePixel() {
  const w = window as unknown as { oaiq?: (...a: unknown[]) => void }
  try { w.oaiq?.('consent', false) } catch { /* Skript nicht da: nichts zu stoppen */ }
  const basis = location.hostname.replace(/^www\./, '')
  for (const name of ['__oppref', '__obref', '__oaiq_consent', '__oaiq_domain_probe']) {
    // Das Skript setzt auf die Basisdomain; die Varianten decken localhost
    // und Vorschau-Domains mit ab.
    for (const d of ['', `; domain=${location.hostname}`, `; domain=.${basis}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`
    }
  }
  try {
    localStorage.removeItem('oaiq_consent')
    for (const k of Object.keys(sessionStorage)) {
      if (k.startsWith('oaiq')) sessionStorage.removeItem(k)
    }
  } catch { /* Speicher gesperrt: dann liegt dort auch nichts */ }
}

function Schalter({ an, aus, gesperrt, label }: { an: boolean; aus: () => void; gesperrt?: boolean; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={an}
      aria-label={label}
      disabled={gesperrt}
      onClick={aus}
      className={`cookie-schieber${an ? ' an' : ''}${gesperrt ? ' gesperrt' : ''}`}
    >
      <span className="cookie-schieber-knopf" />
    </button>
  )
}

export default function CookieConsent() {
  const [offen, setOffen] = useState(false)
  const [entschieden, setEntschieden] = useState(false)
  /*
    Vorauswahl im Fenster (Vorgabe des Betreibers, 12.11.2026): Statistik und
    Marketing stehen auf "an", damit ein Klick auf "Alle akzeptieren" genuegt
    und der Besucher sieht, was dieser Klick einschaltet.

    Das ist nur die Anzeige. Geladen wird erst nach einem Klick auf einen der
    Knoepfe — googleGeladen und pixelGeladen unten haengen allein am
    gespeicherten Eintrag, nie an dieser Vorauswahl.

    "Auswahl speichern" erscheint erst, wenn der Besucher einen Schalter
    selbst umgelegt hat (oder das Fenster ueber das Symbol wieder geoeffnet
    hat). Sonst wuerde ein unberuehrter, vorab aktivierter Schalter als
    Einwilligung gespeichert, und ein bereits angekreuztes Kaestchen ist
    keine Einwilligung (Erwaegungsgrund 32 DSGVO; EuGH, C-673/17 "Planet49").
    Die Einwilligung ist hier immer der Klick auf "Alle akzeptieren" oder auf
    eine selbst geaenderte Auswahl. "Nur notwendige" bleibt gleich gross
    daneben.
  */
  const [wahl, setWahl] = useState<Auswahl>(ALLE)
  const [geaendert, setGeaendert] = useState(false)
  // Steuert, ob gtag.js ueberhaupt angefordert wird. Vorher lud es
  // immer — auch gegen die Ablehnung — und schickte cookielose Pings an
  // Google, also Datenuebertragung ohne Einwilligung.
  const [googleGeladen, setGoogleGeladen] = useState(false)
  // Dasselbe fuer das Pixel von OpenAI: Ohne "Marketing" wird das Skript
  // gar nicht erst angefordert — es geht also auch keine IP-Adresse dorthin.
  const [pixelGeladen, setPixelGeladen] = useState(false)

  useEffect(() => {
    const gelesen = lesen()
    if (!gelesen) return
    const gespeichert = gelesen.wahl
    // Bei neuFragen hat der Kopf-Code das Fenster schon wieder
    // eingeblendet: Es zeigt die Vorauswahl wie bei einem neuen Besucher,
    // und als entschieden gilt erst die neue Wahl. Geladen wird bis dahin
    // nur, was der alte Eintrag noch traegt (gespeichert).
    if (gelesen.neuFragen) setWahl(ALLE)
    else { setWahl(gespeichert); setEntschieden(true) }
    if (gespeichert.statistik) setGoogleGeladen(true)
    if (gespeichert.marketing) setPixelGeladen(true)
  }, [])

  const uebernehmen = (neu: Auswahl) => {
    localStorage.setItem(SPEICHER, JSON.stringify({ ...neu, fassung: FASSUNG }))
    setWahl(neu)
    setGeaendert(false)
    setEntschieden(true)
    setOffen(false)
    setzeAttribut(true)

    // Google haengt allein am Schalter "Statistik". Die Werbesignale
    // bleiben fest verweigert (siehe Kopf dieser Datei).
    const w = window as unknown as { gtag?: (...a: unknown[]) => void }
    w.gtag?.('consent', 'update', {
      analytics_storage: neu.statistik ? 'granted' : 'denied',
    })

    // Das Pixel von OpenAI haengt allein am Schalter "Marketing".
    if (neu.marketing) setPixelGeladen(true)
    else beendePixel()

    if (neu.statistik) setGoogleGeladen(true)
    else loescheGoogleCookies()

    // Lief ein Dienst in dieser Sitzung bereits und ist jetzt abgewaehlt,
    // ist Neuladen der einzige Weg, der ihn sicher beendet. Der
    // gespeicherte Eintrag sorgt dafuer, dass er danach nicht wieder
    // startet.
    const googleAus = !neu.statistik && googleGeladen
    const pixelAus = !neu.marketing && pixelGeladen
    if (googleAus || pixelAus) location.reload()
  }

  const umschalten = (id: 'statistik' | 'marketing') => {
    setGeaendert(true)
    setWahl((v) => ({ ...v, [id]: !v[id] }))
  }

  const wieder = () => { setWahl(lesen()?.wahl ?? KEINE); setGeaendert(false); setOffen(true); setzeAttribut(false) }

  return (
    <>
      {/* Laeuft im Head, vor dem ersten Bild: blendet das Fenster fuer
          Wiederkehrer aus, bevor es aufblitzt, und setzt den
          Consent-Standard, bevor gtag.js ueberhaupt laden koennte.
          Laedt selbst nichts von aussen. */}
      <Script id="ga-consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        var w = { statistik: false, marketing: false }, gesetzt = false;
        try {
          var roh = localStorage.getItem('${SPEICHER}');
          if (roh === 'declined') gesetzt = true;
          else if (roh !== null) {
            var o = roh === 'accepted' ? { statistik: true, marketing: true } : JSON.parse(roh);
            // Zustimmung zu "Marketing" zaehlt nur aus der aktuellen
            // Fassung; eine aeltere fuehrt dazu, dass das Fenster einmal
            // neu erscheint (siehe FASSUNG).
            var aktuell = Number(o.fassung) >= ${FASSUNG};
            w = { statistik: !!o.statistik, marketing: !!o.marketing && aktuell };
            gesetzt = !(o.marketing && !aktuell);
          }
        } catch (e) {}

        document.documentElement.dataset.cookieConsent = gesetzt ? 'set' : 'none';

        gtag('consent', 'default', {
          analytics_storage: w.statistik ? 'granted' : 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
      `}</Script>

      {googleGeladen && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-config" strategy="afterInteractive">{`
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {/* Pixel von OpenAI, nur mit "Marketing". Erst die Warteschlange,
          dann das Skript — so wie OpenAI es vorgibt. "consent true" steht
          vor "init", damit eine frueher vom Skript gemerkte Ablehnung die
          neue Zustimmung nicht ueberstimmt. Gemeldet wird von hier aus
          nichts; das einzige Ereignis loest eine abgeschickte Anfrage aus
          (anfrage-melden.ts). */}
      {pixelGeladen && (
        <>
          <Script id="oai-pixel" strategy="afterInteractive">{`
            window.oaiq = window.oaiq || function () { (window.oaiq.q = window.oaiq.q || []).push(arguments); };
            oaiq('consent', true);
            oaiq('init', { pixelId: '${OAI_PIXEL_ID}' });
          `}</Script>
          <Script src={OAI_SDK} strategy="afterInteractive" />
        </>
      )}

      {/* Steht immer im ausgelieferten HTML und wird per CSS versteckt
          (html[data-cookie-consent='set']). Wuerde er erst nach der
          Hydration gerendert, erschiene er gemessen nach rund 3,3
          Sekunden und waere damit das groesste zuletzt gezeichnete
          Element — also der LCP-Wert, den Google bewertet. */}
      <div className="cookie-banner" role="dialog" aria-labelledby="cookie-titel">
          <div className="cookie-banner-inner">
            {/* Nur dieser Teil scrollt. Die Knoepfe stehen bewusst
                ausserhalb: mit drei Kategorien wurde das Fenster auf dem
                iPhone 699px hoch, und "Alle akzeptieren" wie "Nur
                notwendige" lagen gemessen ausserhalb des Sichtfelds —
                erreichbar nur, wer im Banner scrollt. */}
            <div className="cookie-banner-scroll">
            <h2 id="cookie-titel">Privatsphäre-Einstellungen</h2>
            <p>
              Technisch notwendige Speicherungen sind immer aktiv. Statistik und Marketing
              setzen wir nur mit Ihrer Einwilligung ein. Sie können Ihre Auswahl jederzeit
              über das Symbol unten links ändern oder widerrufen.
            </p>

            <ul className="cookie-kategorien">
              {KATEGORIEN.map((k) => {
                const notwendig = k.id === 'notwendig'
                const an = notwendig ? true : wahl[k.id as 'statistik' | 'marketing']
                return (
                  <li key={k.id}>
                    <div className="cookie-kat-kopf">
                      <span className="cookie-kat-titel">
                        {k.titel}
                        {notwendig && <em>immer aktiv</em>}
                      </span>
                      <Schalter
                        an={an}
                        gesperrt={notwendig}
                        label={k.titel}
                        aus={() => !notwendig && umschalten(k.id as 'statistik' | 'marketing')}
                      />
                    </div>
                    <p>{k.zweck}</p>
                    <details>
                      <summary>Details</summary>
                      <ul>
                        {k.eintraege.map((e) => (
                          <li key={e.name}>
                            <strong>{e.name}</strong> · {e.dauer}
                            <span>{e.was}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                )
              })}
            </ul>

            <p className="cookie-rechtliches">
              <a href="/datenschutz">Datenschutzerklärung</a>
              <a href="/impressum">Impressum</a>
            </p>
            </div>

            <div className="cookie-banner-aktionen">
              {/* Zustimmen und Ablehnen stehen gleich gross nebeneinander.
                  Ein Ablehnen, das schwerer zu finden ist als das
                  Zustimmen, ist keine freie Entscheidung. */}
              <button onClick={() => uebernehmen(ALLE)} className="btn-primary">
                Alle akzeptieren
              </button>
              <button onClick={() => uebernehmen(KEINE)} className="btn-secondary">
                Nur notwendige
              </button>
              {(geaendert || offen) && (
                <button onClick={() => uebernehmen(wahl)} className="btn-secondary cookie-speichern">
                  Auswahl speichern
                </button>
              )}
            </div>
          </div>
      </div>

      {entschieden && !offen && (
        <button
          type="button"
          className="cookie-schalter"
          onClick={wieder}
          aria-label="Privatsphäre-Einstellungen ändern"
          title="Privatsphäre-Einstellungen ändern"
        >
          {/* Keks: Kreis mit ein paar Stueckchen. 24x24-Raster und
              Strichstaerke 1.5 wie der uebrige Icon-Satz. */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="1.5"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3a9 9 0 1 0 9 9 3 3 0 0 1-4-4 3 3 0 0 1-5-5Z" />
            <path d="M9.5 11h.01M14 14.5h.01M10 16h.01M15.5 9.5h.01" />
          </svg>
        </button>
      )}
    </>
  )
}
