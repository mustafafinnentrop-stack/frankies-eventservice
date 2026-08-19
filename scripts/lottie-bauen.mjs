/*
  Erzeugt die Lottie-Dateien in public/lottie/.

  Warum ein Generator und keine handgeschriebenen JSON-Dateien: eine Lottie
  besteht aus einigen hundert Zeilen Zahlen. Wer darin spaeter eine Farbe oder
  ein Timing aendern will, sucht sich tot. Hier stehen die Werte einmal oben,
  der Rest faellt daraus. Aufruf:

      node scripts/lottie-bauen.mjs

  Die Animationen sind selbst gebaut, nicht heruntergeladen — damit haengt an
  ihnen keine fremde Lizenz und keine Namensnennung.
*/
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const WURZEL = join(dirname(fileURLToPath(import.meta.url)), '..')
const ZIEL = join(WURZEL, 'public', 'lottie')

// Markenfarben aus globals.css, in Lottie-Notation (0..1 statt 0..255).
const GOLD = [200 / 255, 164 / 255, 78 / 255, 1]
const CREME = [240 / 255, 236 / 255, 227 / 255, 1]

const FPS = 60
const BREIT = 200
const HOCH = 200

/* ---------- kleine Bausteine ---------- */

const fest = (k) => ({ a: 0, k })

// Weich raus, damit nichts mechanisch wirkt. Der letzte Keyframe traegt in
// Lottie keine Kurve mehr, nur noch Zeit und Wert.
const KURVE = { i: { x: [0.16], y: [1] }, o: { x: [0.34], y: [0] } }
const bewegt = (keys) =>
  ({ a: 1, k: keys.map((k, i) => (i === keys.length - 1 ? { t: k.t, s: k.s } : { ...(k.kurve || KURVE), t: k.t, s: k.s })) })

const tr = (ueber = {}) => ({
  ty: 'tr', p: fest([0, 0]), a: fest([0, 0]), s: fest([100, 100]),
  r: fest(0), o: fest(100), sk: fest(0), sa: fest(0), nm: 'Transformieren', ...ueber,
})

const gruppe = (it, nm = 'Gruppe') => ({ ty: 'gr', nm, hd: false, it: [...it, tr()] })

// Ohne Tangenten sind die Segmente gerade Linien — genau das wollen wir hier.
const pfad = (v, zu = false, tangenten = null) => ({
  ty: 'sh', ind: 0, ix: 1, nm: 'Pfad', hd: false,
  ks: fest({
    i: tangenten?.i || v.map(() => [0, 0]),
    o: tangenten?.o || v.map(() => [0, 0]),
    v, c: zu,
  }),
})

const kontur = (c, w) => ({
  ty: 'st', nm: 'Kontur', hd: false, bm: 0, ml: 4,
  c: fest(c), o: fest(100), w: typeof w === 'object' ? w : fest(w),
  lc: 2, lj: 2, // runde Enden und Ecken
})

const flaeche = (c, o = 100) => ({
  ty: 'fl', nm: 'Flaeche', hd: false, bm: 0, r: 1,
  c: fest(c), o: typeof o === 'object' ? o : fest(o),
})

// lottie-web sammelt einen Trim-Pfad rueckwaerts ein: er muss im it-Array
// hinter den Pfaden stehen, auf die er wirken soll.
const kuerzen = (s, e) => ({
  ty: 'tm', nm: 'Pfad kuerzen', hd: false, ix: 1, m: 1,
  s: typeof s === 'object' ? s : fest(s),
  e: typeof e === 'object' ? e : fest(e),
  o: fest(0),
})

const kreis = (d, p = [0, 0]) => ({ ty: 'el', nm: 'Kreis', hd: false, d: 1, p: fest(p), s: fest([d, d]) })

const ebene = (nm, ind, shapes, ueber = {}) => {
  const { ks, ...rest } = ueber
  return {
    ddd: 0, ind, ty: 4, nm, sr: 1, ao: 0, bm: 0, st: 0,
    ks: {
      o: fest(100), r: fest(0), p: fest([BREIT / 2, HOCH / 2, 0]),
      a: fest([0, 0, 0]), s: fest([100, 100, 100]), ...ks,
    },
    shapes, ip: 0, op: rest.op ?? 120, ...rest,
  }
}

const datei = (nm, op, layers) => ({
  v: '5.9.6', fr: FPS, ip: 0, op, w: BREIT, h: HOCH, nm, ddd: 0,
  assets: [], layers, markers: [],
})

/* ---------- Variante A: Haken im Ring ---------- */

function haken() {
  const OP = 96
  const ring = ebene('Ring', 2, [
    gruppe([
      kreis(132),
      kuerzen(0, bewegt([{ t: 0, s: [0] }, { t: 42, s: [100] }])),
      kontur(GOLD, 10),
    ]),
    // Der Kreis startet in Lottie bei drei Uhr. Gedreht faengt der Strich
    // oben an, wo das Auge ihn erwartet.
  ], { ks: { r: fest(-90) }, op: OP })

  const strich = ebene('Haken', 1, [
    gruppe([
      pfad([[-30, 4], [-9, 25], [33, -21]]),
      kuerzen(0, bewegt([{ t: 26, s: [0] }, { t: 56, s: [100] }])),
      kontur(CREME, 12),
    ]),
  ], { op: OP })

  const puls = ebene('Puls', 3, [
    gruppe([kreis(132), kontur(GOLD, 3)]),
  ], {
    ks: {
      o: bewegt([{ t: 50, s: [45] }, { t: 92, s: [0] }]),
      s: bewegt([{ t: 50, s: [100, 100, 100] }, { t: 92, s: [152, 152, 100] }]),
    },
    // Ohne eigenen Einstiegspunkt haelt Lottie den ersten Keyframe ab Bild 0:
    // der Ring stuende dann von Anfang an blass im Bild, statt am Ende
    // einmal aufzugehen.
    ip: 50,
    op: OP,
  })

  return datei('Haken', OP, [strich, ring, puls])
}

/* ---------- Variante B: Glas fuellt sich ---------- */

// Aussenkontur und Innenraum des Glases. Gerade Seiten, oben breiter als
// unten — ein Tumbler, kein Cocktailkelch, weil an der Theke genau der steht.
const G_OBEN = -60, G_UNTEN = 58
const I_OBEN = -56, I_UNTEN = 54
const I_HW_OBEN = 35, I_HW_UNTEN = 23

// Halbe Innenbreite auf Hoehe y — daraus faellt die Form des Fuellstands.
const halbbreite = (y) =>
  I_HW_UNTEN + ((I_UNTEN - y) / (I_UNTEN - I_OBEN)) * (I_HW_OBEN - I_HW_UNTEN)

const fuellung = (y) => {
  const hw = Number(halbbreite(y).toFixed(2))
  return { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-hw, y], [-I_HW_UNTEN, I_UNTEN], [I_HW_UNTEN, I_UNTEN], [hw, y]], c: true }
}

function glas() {
  const OP = 110
  const MITTE = [BREIT / 2, 102, 0]

  const kontour = ebene('Glas', 1, [
    gruppe([
      pfad([[-40, G_OBEN], [-27, G_UNTEN], [27, G_UNTEN], [40, G_OBEN]]),
      kuerzen(0, bewegt([{ t: 0, s: [0] }, { t: 26, s: [100] }])),
      kontur(CREME, 8),
    ]),
  ], { ks: { p: fest(MITTE) }, op: OP })

  // Der Fuellstand ist eine Formanimation, kein Rechteck hinter einer Maske.
  // Eine Maske haette bei jedem Bild eine eigene Zeichenebene gekostet und
  // waere bei einem Renderfehler als voller Kasten sichtbar geworden.
  const inhalt = ebene('Fuellung', 2, [
    gruppe([
      {
        ty: 'sh', ind: 0, ix: 1, nm: 'Pegel', hd: false,
        ks: bewegt([
          { t: 10, s: [fuellung(I_UNTEN)] },
          { t: 58, s: [fuellung(-50)] },
          { t: 76, s: [fuellung(-44)] },
        ]),
      },
      flaeche(GOLD),
    ]),
  ], { ks: { p: fest(MITTE) }, op: OP })

  // Drei Blaeschen, versetzt gestartet. Sie steigen erst, wenn das Glas voll
  // ist — vorher waere da nichts, worin sie aufsteigen koennten.
  const blasen = [[-14, 44], [6, 58], [17, 72]].map(([x, start], i) =>
    ebene(`Blase ${i + 1}`, 3 + i, [
      gruppe([kreis(7, [x, 0]), flaeche(CREME)]),
    ], {
      ks: {
        o: bewegt([{ t: start, s: [0] }, { t: start + 8, s: [65] }, { t: start + 30, s: [0] }]),
        p: bewegt([{ t: start, s: [MITTE[0], 146, 0] }, { t: start + 30, s: [MITTE[0], 68, 0] }]),
      },
      ip: start, op: OP,
    })
  )

  return datei('Glas', OP, [kontour, ...blasen, inhalt])
}

/* ---------- Variante C: Anstossen ---------- */

function anstossen() {
  const OP = 110
  const glasKontur = [[-26, -76], [-17, 0], [17, 0], [26, -76]]
  // Die Fuellung bleibt hinter der Innenkante der Kontur. Die Wand laeuft von
  // halber Breite 26 auf Randhoehe -76 zu 17 am Boden, die 7 breite Kontur
  // nimmt davon nach innen 3,5 weg — bei -56 bleiben 20, bei -6 bleiben 14.
  const glasInhalt = [[-20, -56], [-13, -6], [13, -6], [20, -56]]

  const einGlas = (nm, ind, x, richtung) =>
    ebene(nm, ind, [
      gruppe([pfad(glasInhalt, true), flaeche(GOLD)], 'Inhalt'),
      gruppe([pfad(glasKontur), kontur(CREME, 7)], 'Kontur'),
    ], {
      ks: {
        // Drehpunkt ist der Glasboden, nicht die Ebenenmitte — sonst kippt
        // das Glas um seine Luft statt um seinen Fuss.
        p: fest([x, 150, 0]),
        o: bewegt([{ t: 0, s: [0] }, { t: 10, s: [100] }]),
        // Der Anschlag bei 8 Grad ist gerechnet, nicht geschaetzt: bei einem
        // Abstand der Fusspunkte von 72 und einer halben Glasbreite von 26
        // auf Randhoehe 76 gilt 26*cos(r) + 76*sin(r) = 36, wenn sich die
        // Raender genau beruehren sollen. Das loest r = 7,7 Grad.
        r: bewegt([
          { t: 0, s: [-18 * richtung] },
          { t: 34, s: [8 * richtung] },
          { t: 46, s: [3 * richtung] },
          { t: 60, s: [5.5 * richtung] },
          { t: 88, s: [3 * richtung] },
        ]),
      },
      op: OP,
    })

  // Funken am Treffpunkt: jeder Strich waechst nach aussen und wird von
  // hinten wieder eingezogen. Deshalb laufen Anfang und Ende versetzt.
  const winkel = [-90, -142, -38, -166, -14]
  const funken = ebene('Funken', 3, winkel.map((grad, i) => {
    const rad = (grad * Math.PI) / 180
    const p1 = [Number((Math.cos(rad) * 13).toFixed(2)), Number((Math.sin(rad) * 13).toFixed(2))]
    const p2 = [Number((Math.cos(rad) * 36).toFixed(2)), Number((Math.sin(rad) * 36).toFixed(2))]
    const los = 32 + i * 3
    return gruppe([
      pfad([p1, p2]),
      // Das Ende laeuft voraus, der Anfang zieht erst nach, wenn der Strich
      // einmal ganz dasteht. Liefen beide gleichzeitig, waere nie mehr als
      // ein Punkt zu sehen.
      kuerzen(
        bewegt([{ t: los + 16, s: [0] }, { t: los + 30, s: [100] }]),
        bewegt([{ t: los, s: [0] }, { t: los + 16, s: [100] }]),
      ),
      kontur(GOLD, 4),
    ], `Funke ${i + 1}`)
  }), {
    ks: {
      p: fest([BREIT / 2, 74, 0]),
      o: bewegt([{ t: 30, s: [100] }, { t: 62, s: [100] }, { t: 72, s: [0] }]),
    },
    ip: 30, op: OP,
  })

  return datei('Anstossen', OP, [einGlas('Glas links', 1, 64, 1), einGlas('Glas rechts', 2, 136, -1), funken])
}

/* ---------- schreiben ---------- */

mkdirSync(ZIEL, { recursive: true })
for (const [name, bauen] of [['haken', haken], ['glas', glas], ['anstossen', anstossen]]) {
  const inhalt = JSON.stringify(bauen())
  writeFileSync(join(ZIEL, `${name}.json`), inhalt)
  console.log(`${name}.json  ${(inhalt.length / 1024).toFixed(1)} KB`)
}
