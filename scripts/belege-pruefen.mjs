/*
  Prueft die Werbetexte der Seite gegen ihre eigenen Belege. Aufruf:

      node scripts/belege-pruefen.mjs   (auch: npm run belege)

  Zwei Regeln:

  1. Allaussagen ("jede Location", "jeder Art und jeder Größe", "bei jedem
     Event", "jeder Handgriff", "überall") fallen immer durch — kein Beleg
     der Welt deckt "jede".

  2. Fuer die Cocktailbar-Einleitung zusaetzlich: Jeder genannte Orts- oder
     Anlasstyp muss in den ORTE-Fotos (components/cocktailbar-daten.ts) oder
     einer abgeschlossenen Cocktailbar-Referenz (components/Referenzen.tsx,
     ohne `geplant: true`) vorkommen. Und jede Zahl, die ein Text nennt
     (100 Hektoliter, 12 Leute, rund 20 Veranstaltungen), muss in den
     Referenzen oder im Hero stehen — aendert dort jemand die Fakten, faellt
     der Text auf, der sie noch behauptet.

  Bewusst NICHT geprueft: die Kicker-Labels "Für jeden Anlass" ueber den
  Anlass-Rastern. Sie beschreiben das Angebot (was man buchen kann), nicht
  eine erbrachte Leistung. Ebenso nicht die Partner-FAQ ("für jede Leistung"
  = Konditionszusage, keine Faehigkeitsbehauptung) und die Preiszeile der
  Cocktailbar-Seite ("Jedes Event ist anders" = Preispolitik).

  Die Dateien werden als Text gelesen und mit regulaeren Ausdruecken
  zerlegt, nicht importiert — TSX laeuft nicht in Node. Aendert sich die
  Struktur (Einrueckung, Feldnamen, Klassennamen), bricht das Skript laut
  ab statt still zu bestehen.
*/
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const WURZEL = join(dirname(fileURLToPath(import.meta.url)), '..')
const lesen = (p) => readFileSync(join(WURZEL, p), 'utf8')
// JSX-Kommentare raus, sonst schlagen die Muster auf Erklaertexte an,
// die alte Formulierungen woertlich zitieren.
const ohneKommentare = (s) => s.replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/^\s*\/\/.*$/gm, '')

/* ---------- Belege einsammeln ---------- */

const datenQuelle = lesen('components/cocktailbar-daten.ts')
const orteBlock = datenQuelle.split('export const ORTE = [')[1]?.split('\n]')[0]
if (!orteBlock) { console.error('ORTE nicht gefunden — Struktur geaendert?'); process.exit(2) }
const orteTexte = [...orteBlock.matchAll(/(?:ort|zusatz):\s*'([^']+)'/g)].map((m) => m[1])

const refQuelle = lesen('components/Referenzen.tsx')
const refBlock = refQuelle.split('const REFERENZEN: Referenz[] = [')[1]?.split('\n]')[0]
if (!refBlock) { console.error('REFERENZEN nicht gefunden — Struktur geaendert?'); process.exit(2) }
const referenzen = [...refBlock.matchAll(/\{\s*\n\s{4}ort:[\s\S]*?\n\s{2}\},/g)].map((m) => {
  const b = m[0]
  return {
    ort: b.match(/ort:\s*'([^']+)'/)?.[1] ?? '',
    leistungen: b.match(/leistungen:\s*\[([^\]]*)\]/)?.[1] ?? '',
    geplant: /geplant:\s*true/.test(b),
  }
})
if (referenzen.length < 3) { console.error(`Nur ${referenzen.length} Referenzen erkannt — Struktur geaendert?`); process.exit(2) }

const cocktailbarRefs = referenzen.filter((r) => r.leistungen.includes('Mobile Cocktailbar') && !r.geplant)
const belegCocktailbar = [...orteTexte, ...cocktailbarRefs.map((r) => r.ort)].join(' | ').toLowerCase()

// Faktenquelle fuer Zahlen und Namen: Referenzen (samt zahlen-Feldern) + Hero.
const faktenquelle = (refBlock + lesen('components/Hero.tsx')).toLowerCase()

/* ---------- Pruefstellen ---------- */

// Allaussagen. "jeden Anlass"/"alle Anlässe" absichtlich nur fuer
// Ueberschriften und Fliesstext — die Angebots-Labels bleiben aussen vor,
// weil sie gar nicht erst extrahiert werden.
const ALLAUSSAGEN = [
  /jede[rnms]?\s+(location|ort|größe|art|handgriff|event)/i,
  /bei jedem event/i,
  /alle anlässe/i,
  /veranstaltungen jeder/i,
  /überall/i,
]

const extrahieren = {
  absaetze: (q) => [...q.matchAll(/<p className="section-text"[^>]*>([\s\S]*?)<\/p>/g)].map((m) => m[1]),
  titel: (q) => [...q.matchAll(/<h2 className="section-title"[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => m[1]),
  spans: (q) => [...q.matchAll(/<span>([^<{]+)<\/span>/g)].map((m) => m[1]),
  beschreibungen: (q) => [...q.matchAll(/description:\s*'([^']*)'/g)].map((m) => m[1]),
}

const PRUEFSTELLEN = [
  {
    name: 'Startseite / Cocktailbar-Einleitung',
    datei: 'components/Cocktailbar.tsx',
    teile: ['absaetze'],
    nur_erster_absatz: true,
    ortsbelege: true,
    fakten: ['kalberschnacke'],
  },
  {
    name: 'Startseite / Über uns',
    datei: 'components/Ueber.tsx',
    teile: ['absaetze'],
    nur_erster_absatz: true,
    fakten: ['marmecke', 'schneider haustechnik', 'rund 20 veranstaltungen'],
  },
  {
    name: '/eventservice-kreis-olpe',
    datei: 'app/eventservice-kreis-olpe/page.tsx',
    teile: ['absaetze', 'titel', 'spans', 'beschreibungen'],
    fakten: ['marmecke', '100', 'hektoliter', '12', '18'],
  },
  {
    name: '/service / Anlass-Abschnitt',
    datei: 'app/service/ServiceContent.tsx',
    teile: ['titel'],
    fakten: ['rund 20 veranstaltungen'],
  },
]

// Anlasstypen, die die Cocktailbar-Einleitung nennen koennte. Eingefroren
// am 19.08.2026 — neue Begriffe hier ergaenzen.
const BEGRIFFE = ['Garten', 'Wiese', 'Pavillon', 'Halle', 'Hof', 'Terrasse',
  'Firmenfeier', 'Sommerfest', 'Hochzeit', 'Geburtstag', 'JGA',
  'Campingplatz', 'Schützenfest', 'Dorffest', 'Vereinsfest', 'Gartenfest']

/* ---------- pruefen ---------- */

let fehler = 0
const fehlt = (wo, was, warum) => { fehler++; console.log(`  FEHLT  [${wo}] ${was} — ${warum}`) }

for (const st of PRUEFSTELLEN) {
  console.log(`\n=== ${st.name} (${st.datei}) ===`)
  const quelle = ohneKommentare(lesen(st.datei))
  let texte = st.teile.flatMap((t) => extrahieren[t](quelle))
  if (st.nur_erster_absatz) texte = texte.slice(0, 1)
  if (!texte.length) { console.error('  Keine Textstellen gefunden — Struktur geaendert?'); process.exit(2) }

  for (const roh of texte) {
    const text = roh.replace(/<br\s*\/?>/g, ' ').replace(/\s+/g, ' ').trim()
    if (!text) continue
    console.log(`  Text: "${text.slice(0, 110)}${text.length > 110 ? '…' : ''}"`)

    for (const muster of ALLAUSSAGEN) {
      const t = text.match(muster)
      if (t) fehlt(st.name, `"${t[0]}"`, 'Allaussage, durch keinen Beleg zu decken')
    }

    if (st.ortsbelege) {
      for (const begriff of BEGRIFFE) {
        if (!new RegExp(begriff, 'i').test(text)) continue
        if (belegCocktailbar.includes(begriff.toLowerCase())) {
          console.log(`  OK     ${begriff} — belegt`)
        } else {
          fehlt(st.name, begriff, 'kein Foto, keine abgeschlossene Cocktailbar-Referenz')
        }
      }
    }
  }

  for (const fakt of st.fakten ?? []) {
    const genannt = texte.some((t) => t.toLowerCase().includes(fakt))
    if (!genannt) continue // Der Text nennt den Fakt nicht — nichts zu decken.
    if (faktenquelle.includes(fakt)) console.log(`  OK     Fakt "${fakt}" — steht in Referenzen/Hero`)
    else fehlt(st.name, `Fakt "${fakt}"`, 'im Text genannt, aber nicht mehr in Referenzen/Hero gedeckt')
  }
}

console.log(fehler
  ? `\nDURCHGEFALLEN: ${fehler} unbelegte Aussage(n)`
  : '\nBESTANDEN: alles Genannte ist belegt')
process.exit(fehler ? 1 : 0)
