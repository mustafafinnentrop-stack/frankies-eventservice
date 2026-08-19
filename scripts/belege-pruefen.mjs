/*
  Prueft den Einleitungstext der Cocktailbar-Section gegen die Belege der
  Seite. Aufruf:

      node scripts/belege-pruefen.mjs

  Regel: Jeder Orts- oder Anlasstyp, den der Text nennt, muss entweder in
  den ORTE-Fotos (components/cocktailbar-daten.ts) oder in einer
  abgeschlossenen Cocktailbar-Referenz (components/Referenzen.tsx, ohne
  `geplant: true`) vorkommen. Allaussagen wie "jede Location" fallen immer
  durch, weil kein Beleg der Welt "jede" abdeckt.

  Hintergrund: Der Satz "Egal ob Geburtstag im Garten, Hochzeitsfeier unter
  freiem Himmel oder Firmen-Sommerfest — wir verwandeln jede Location in
  eine Bar" nannte zwei Beispiele ohne einen einzigen Beleg auf der Seite,
  und die einzige Hochzeit in den Referenzen hat die Cocktailbar gar nicht
  gebucht. Dieses Skript soll verhindern, dass so etwas wieder reinrutscht.

  Die Dateien werden als Text gelesen und mit regulaeren Ausdruecken
  zerlegt, nicht importiert — Referenzen.tsx ist TSX und laeuft nicht in
  Node. Aendert sich dort die Struktur (Einrueckung der Eintraege,
  Feldnamen), muss dieses Skript mitziehen; es bricht dann laut ab statt
  still zu bestehen.
*/
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const WURZEL = join(dirname(fileURLToPath(import.meta.url)), '..')
const lesen = (p) => readFileSync(join(WURZEL, p), 'utf8')

/* ---------- Belege einsammeln ---------- */

// ORTE aus cocktailbar-daten.ts: ort- und zusatz-Zeilen sind der Belegtext.
const datenQuelle = lesen('components/cocktailbar-daten.ts')
const orteBlock = datenQuelle.split('export const ORTE = [')[1]?.split('\n]')[0]
if (!orteBlock) { console.error('ORTE nicht gefunden — Struktur geaendert?'); process.exit(2) }
const orteTexte = [...orteBlock.matchAll(/(?:ort|zusatz):\s*'([^']+)'/g)].map((m) => m[1])

// Abgeschlossene Cocktailbar-Referenzen aus Referenzen.tsx.
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
const belegteRefs = referenzen.filter((r) => r.leistungen.includes('Mobile Cocktailbar') && !r.geplant)

const belegtext = [...orteTexte, ...belegteRefs.map((r) => r.ort)].join(' | ').toLowerCase()

/* ---------- den Text pruefen ---------- */

const seite = lesen('components/Cocktailbar.tsx')
const absatz = seite.match(/<p className="section-text"[^>]*>([\s\S]*?)<\/p>/)?.[1]
  ?.replace(/\s+/g, ' ').trim()
if (!absatz) { console.error('Einleitungsabsatz nicht gefunden'); process.exit(2) }

console.log(`Gepruefter Text:\n  "${absatz}"\n`)
console.log(`Belege (${orteTexte.length} ORTE-Zeilen, ${belegteRefs.length} abgeschlossene Cocktailbar-Referenzen):`)
for (const t of orteTexte) console.log(`  Foto/Ort:  ${t}`)
for (const r of belegteRefs) console.log(`  Referenz:  ${r.ort}`)
console.log('')

let fehler = 0
const durchgefallen = (was, warum) => { fehler++; console.log(`  FEHLT  ${was} — ${warum}`) }
const bestanden = (was, wo) => console.log(`  OK     ${was} — belegt durch "${wo}"`)

// Allaussagen: durch keinen Beleg zu decken.
for (const muster of [/jede[rnms]?\s+(location|ort)/i, /überall/i, /jeder\s+anlass/i]) {
  const t = absatz.match(muster)
  if (t) durchgefallen(`"${t[0]}"`, 'Allaussage, durch keinen Beleg zu decken')
}

// Orts- und Anlasstypen, die der Text nennen koennte. Eingefroren am
// 19.08.2026 als Testeingabe — neue Begriffe hier ergaenzen.
const BEGRIFFE = ['Garten', 'Wiese', 'Pavillon', 'Halle', 'Hof', 'Terrasse',
  'Firmenfeier', 'Sommerfest', 'Hochzeit', 'Geburtstag', 'JGA',
  'Campingplatz', 'Schützenfest', 'Dorffest', 'Vereinsfest']

for (const begriff of BEGRIFFE) {
  if (!new RegExp(begriff, 'i').test(absatz)) continue
  const i = belegtext.indexOf(begriff.toLowerCase())
  if (i >= 0) {
    const quelle = belegtext.split(' | ').find((z) => z.includes(begriff.toLowerCase()))
    bestanden(begriff, quelle)
  } else {
    durchgefallen(begriff, 'kein Foto, keine abgeschlossene Cocktailbar-Referenz')
  }
}

console.log(fehler ? `\nDURCHGEFALLEN: ${fehler} unbelegte Aussage(n)` : '\nBESTANDEN: alles Genannte ist belegt')
process.exit(fehler ? 1 : 0)
