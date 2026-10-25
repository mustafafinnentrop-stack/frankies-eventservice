'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FLATS } from '@/components/preise-daten'
import Stufen from './Stufen'

/*
  02 / Was wir können. Die vier Leistungsbereiche, wie der Betreiber sie
  am 08.09.2026 festgelegt hat: Thekenservice mit eigener Mannschaft,
  Getraenkecatering, mobile Cocktailbar, Equipmentverleih. Foodtruck und
  Kaffeestation laufen als Ergaenzung mit.

  Links ein Foto, rechts ein Akkordeon. Beim Umschalten wird das neue Foto
  in fuenf senkrechten Streifen eingeschoben, abwechselnd von oben und
  unten — das ist der Bildwechsel aus der Vorlage, hier mit der Web
  Animations API nachgebaut. Ohne Bewegungswunsch wird das Bild einfach
  getauscht.

  Zahlen zur Cocktailbar kommen aus preise-daten.ts, nicht von hier.
*/
type Dienst = {
  nr: string
  titel: React.ReactNode
  text: string
  detail: string
  link: { href: string; text: string }
  bild: string
  alt: string
  pos: string
  caption: string
}

const kleinste = FLATS[0]
const groesste = FLATS[FLATS.length - 1]

const DIENSTE: Dienst[] = [
  {
    nr: '01',
    titel: <>Thekenservice mit <br />eigener Mannschaft</>,
    text: 'Personal, das zapft, mixt und bedient: Wir kommen mit Theke, Zapftechnik und bis zu zwanzig Leuten und führen den gesamten Ausschank durch — von Aufbau über Service bis Abbau.',
    detail: 'Für Schützenfeste, Karneval, Vereinsfeste und Firmenfeiern.',
    link: { href: '/getraenkeservice-schuetzenfest', text: 'Thekenservice ansehen' },
    bild: '/ausschankwagen.webp',
    alt: 'Ausschankwagen von Frankies Eventservice im Betrieb auf einem Fest',
    pos: 'center 72%',
    caption: 'Thekenservice',
  },
  {
    nr: '02',
    titel: 'Getränkecatering',
    text: 'Sie kaufen die Getränke für Ihr Fest bei uns. Die Menge planen wir gemeinsam, geliefert und gekühlt kommt sie an — Sie schenken selbst aus.',
    detail: 'Auf Wunsch mit Servicepersonal, das den Ausschank übernimmt.',
    link: { href: '/service', text: 'Getränkecatering ansehen' },
    bild: '/schuetzenfest.webp',
    alt: 'Mitarbeiterin von Frankies Eventservice mit einem Tablett voller Biergläser',
    pos: '45% 50%',
    caption: 'Getränkecatering',
  },
  {
    nr: '03',
    titel: <>Mobile <br />Cocktailbar</>,
    text: 'Mobile Theke, Barkeeper, alle Zutaten und Gläser — aufgebaut, wo Sie feiern. Die Bar läuft autark, ohne Strom- und Wasseranschluss.',
    detail: `Vier feste Pauschalen, von ${kleinste.anzahl} bis ${groesste.anzahl} Cocktails.`,
    link: { href: '/cocktailbar-lennestadt', text: 'Cocktailbar entdecken' },
    bild: '/theke-vor-ort.webp',
    alt: 'Die mobile Theke von Frankies Eventservice, vor Ort aufgebaut',
    pos: 'center 62%',
    caption: 'Mobile Cocktailbar',
  },
  {
    nr: '04',
    titel: 'Equipmentverleih',
    text: 'Festzelte, Bierzeltgarnituren, Zapfanlagen, Kühlanhänger, Hüpfburgen — alles, was ein Fest an Ausstattung braucht, zur Miete. Auf Wunsch mit Personal.',
    detail: 'Auch einzeln, ohne Veranstaltungsservice.',
    link: { href: '#anfrage', text: 'Equipment anfragen' },
    bild: '/glaeser.webp',
    alt: 'Zwei Mitarbeiter von Frankies Eventservice räumen Gläser hinter der Theke ein',
    pos: 'center 40%',
    caption: 'Equipmentverleih',
  },
]

/*
  Umbau 25.10.2026 nach Vorgabe des Betreibers: kein "Wie viel wollen Sie
  selbst machen?" mehr. Erst vier Gruende fuer uns, dann die Pakete
  (Festwirtschaft zuerst), dann der Vergleich "Selbst organisieren /
  Mit Frankies". Jede Aussage ist durch Seite oder AGB gedeckt:
  Ruecknahme originalverschlossener Gebinde nur nach Vereinbarung
  (AGB § 6 Abs. 3), Personal bis zu zwanzig (Leistungstext 01).
*/
/*
  Vergleichstabelle (Umbau 25.10.2026, Vorbild: Vergleichstabelle aus dem
  Onlineshop des Betreibers): hervorgehobene Gold-Spalte "Mit Frankies"
  mit Haken, daneben "Selbst organisieren" mit Kreuzen. Jede Zeile ist
  durch Seite oder AGB gedeckt; Ruecknahme nur nach Absprache (§ 6 Abs. 3).
*/
const VERGLEICH = [
  'Personal, das zapft, mixt und bedient',
  'Theke, Zapfanlage und Kühlung',
  'Gläser, Zelt und Garnituren',
  'Auf- und Abbau am Festtag',
  'Rücknahme übriger Getränke nach Absprache',
  'Ein Ansprechpartner bis zur Abrechnung',
]

const GRUENDE = [
  { titel: 'Komplett ausgestattet', text: 'Theke, Zapftechnik, Kühlung und Gläser bringen wir mit. Auch Zelt und Garnituren, wenn Sie wollen.' },
  { titel: 'Eingespieltes Personal', text: 'Unsere Leute zapfen, mixen und bedienen — bei großen Festen bis zu zwanzig, vom Aufbau bis zum Schluss.' },
  { titel: 'Keine Reste, kein Risiko', text: 'Originalverschlossene Getränke nehmen wir nach Absprache zurück. Das steht dann so im Angebot.' },
  { titel: 'Ein Ansprechpartner', text: 'Von der Planung über den Abend bis zur Abrechnung: eine Nummer, ein Team.' },
]

const EASE = 'cubic-bezier(.19,1,.22,1)'

export default function LeistungenNeu() {
  const [aktiv, setAktiv] = useState(0)
  const visualRef = useRef<HTMLDivElement>(null)
  const bildRef = useRef<HTMLImageElement>(null)
  const anfrageRef = useRef(0)

  async function bildWechseln(d: Dienst) {
    const anfrage = ++anfrageRef.current
    const visual = visualRef.current
    const img = bildRef.current
    if (!visual || !img) return
    visual.querySelectorAll('.sn-slices').forEach((el) => el.remove())
    const neu = new window.Image()
    neu.src = d.bild
    try { await neu.decode() } catch { return }
    if (anfrage !== anfrageRef.current) return

    const ruhig = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const setzen = () => { img.src = d.bild; img.alt = d.alt; img.style.objectPosition = d.pos }
    if (ruhig || typeof img.animate !== 'function') { setzen(); return }

    const ebene = document.createElement('div')
    ebene.className = 'sn-slices'
    ebene.setAttribute('aria-hidden', 'true')
    const streifen: HTMLDivElement[] = []
    for (let i = 0; i < 5; i++) {
      const s = document.createElement('div')
      s.className = 'sn-slice'
      s.style.left = `${i * 20}%`
      const foto = document.createElement('img')
      foto.src = d.bild
      foto.alt = ''
      foto.style.left = `${-i * 100}%`
      foto.style.objectPosition = d.pos
      s.appendChild(foto)
      ebene.appendChild(s)
      streifen.push(s)
    }
    visual.appendChild(ebene)
    await Promise.allSettled(
      streifen.map((s, i) =>
        s.animate(
          [{ transform: `translateY(${i % 2 ? -105 : 105}%)` }, { transform: 'translateY(0)' }],
          { duration: 780, delay: i * 45, fill: 'both', easing: EASE },
        ).finished,
      ),
    )
    if (anfrage === anfrageRef.current) setzen()
    ebene.remove()
  }

  const waehlen = (i: number) => {
    if (i === aktiv) return
    setAktiv(i)
    void bildWechseln(DIENSTE[i])
    const panel = document.getElementById(`sn-dienst-${i}`)
    if (panel && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && typeof panel.animate === 'function') {
      panel.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 420, easing: EASE })
    }
  }

  const tasten = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    let ziel: number | undefined
    if (e.key === 'ArrowDown') ziel = (i + 1) % DIENSTE.length
    if (e.key === 'ArrowUp') ziel = (i - 1 + DIENSTE.length) % DIENSTE.length
    if (e.key === 'Home') ziel = 0
    if (e.key === 'End') ziel = DIENSTE.length - 1
    if (ziel !== undefined) {
      e.preventDefault()
      document.querySelectorAll<HTMLButtonElement>('[data-dienst]')[ziel]?.focus()
    }
  }

  const d0 = DIENSTE[0]
  return (
    <>
    {/* 02 — Warum Frankies */}
    <section className="sn-leistungen" id="warum" aria-labelledby="sn-warum-titel">
      <div className="sn-top sn-reveal">
        <span className="sn-eyebrow">02 / Warum Frankies</span>
        <span className="sn-note">Vier Gründe</span>
      </div>
      <div className="sn-heading sn-reveal">
        <h2 id="sn-warum-titel">Ein Fest ist Arbeit.<br /><em>Unsere.</em></h2>
      </div>
      <div className="sn-gruende sn-reveal" role="list" aria-label="Vier Gründe für Frankies">
        {GRUENDE.map((g, i) => (
          <article key={g.titel} className="sn-grund" role="listitem">
            <span className="sn-stufe-no">{String(i + 1).padStart(2, '0')}</span>
            <h3>{g.titel}</h3>
            <p>{g.text}</p>
          </article>
        ))}
      </div>
    </section>

    {/* 03 — Pakete */}
    <section className="sn-leistungen" id="pakete" aria-labelledby="sn-pakete-titel">
      <div className="sn-top sn-reveal">
        <span className="sn-eyebrow">03 / Unsere Pakete</span>
        <span className="sn-note">Festwirtschaft · Theke · Lieferung</span>
      </div>
      <div className="sn-heading sn-reveal">
        <h2 id="sn-pakete-titel">So buchen Sie uns.<br /><em>Vom ganzen Fest bis zur Lieferung.</em></h2>
      </div>
      <Stufen />
    </section>

    {/* 04 — Vergleich */}
    <section className="sn-leistungen" id="vergleich" aria-labelledby="sn-vergleich-titel">
      <div className="sn-top sn-reveal">
        <span className="sn-eyebrow">04 / Der Vergleich</span>
        <span className="sn-note">Der Unterschied auf einen Blick</span>
      </div>
      <div className="sn-heading sn-reveal">
        <h2 id="sn-vergleich-titel">Selbst organisieren?<br /><em>Oder Frankies.</em></h2>
      </div>
      <div className="sn-vt sn-reveal" role="table" aria-label="Mit Frankies im Vergleich zum Selbstorganisieren">
        <div className="sn-vt-kopf" role="row">
          <span className="sn-vt-leer" role="columnheader"><span className="sn-nur-vorleser">Leistung</span></span>
          <span className="sn-vt-haupt sn-vt-kopfzelle" role="columnheader">
            <Image src="/team.webp" alt="" width={96} height={96} quality={60} className="sn-vt-bild" />
            <strong>Mit Frankies</strong>
            <span className="sn-vt-badge">Alles aus einer Hand</span>
          </span>
          <span className="sn-vt-neben sn-vt-nebenkopf" role="columnheader">
            <strong>Selbst organisieren</strong>
            <span className="sn-vt-unter">Alles einzeln besorgen</span>
          </span>
        </div>
        {VERGLEICH.map((z) => (
          <div className="sn-vt-zeile" role="row" key={z}>
            <span className="sn-vt-merkmal" role="cell">{z}</span>
            <span className="sn-vt-haupt" role="cell">
              <span className="sn-vt-ja" aria-hidden="true">✓</span>
              <span className="sn-nur-vorleser">inklusive</span>
            </span>
            <span className="sn-vt-neben" role="cell">
              <span className="sn-vt-nein" aria-hidden="true">✕</span>
              <span className="sn-nur-vorleser">müssen Sie selbst organisieren</span>
            </span>
          </div>
        ))}
        <div className="sn-vt-fuss" role="row">
          <span className="sn-vt-leer" role="cell" />
          <span className="sn-vt-haupt sn-vt-fusszelle" role="cell">
            <a className="sn-vt-cta" href="#anfrage">Angebot anfordern <span aria-hidden="true">↗</span></a>
          </span>
          <span className="sn-vt-neben sn-vt-nebenfuss" role="cell" />
        </div>
      </div>
    </section>

    {/* 05 — Was wir koennen (Bausteine im Detail) */}
    <section className="sn-leistungen" id="leistungen" aria-labelledby="sn-leistungen-titel">
      <div className="sn-top sn-reveal">
        <span className="sn-eyebrow">05 / Was wir können</span>
        <Link className="sn-link" href="/service">Alle Leistungen <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="sn-heading sn-reveal">
        <h2 id="sn-leistungen-titel">Vier Bausteine.<br /><em>Einzeln oder zusammen.</em></h2>
      </div>

      <div className="sn-services">
        <div className="sn-visual sn-reveal" ref={visualRef}>
          {/* Absichtlich ein einfaches <img>: Das Bild wird beim Umschalten
              per DOM getauscht und in Streifen animiert — next/image wuerde
              dazwischenfunken. Die WebP-Dateien sind ohnehin klein. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={bildRef} src={d0.bild} alt={d0.alt} width={1200} height={1500} loading="lazy" style={{ objectPosition: d0.pos }} />
          <div className="sn-visual-caption">
            <span>{DIENSTE[aktiv].nr} / 04</span>
            <span>{DIENSTE[aktiv].caption}</span>
          </div>
        </div>

        <div className="sn-index">
          {DIENSTE.map((d, i) => {
            const offen = i === aktiv
            return (
              <article key={d.nr} className={`sn-item${offen ? ' is-active' : ''}`}>
                <h3>
                  <button type="button" aria-expanded={offen} aria-controls={`sn-dienst-${i}`} data-dienst={i} onClick={() => waehlen(i)} onKeyDown={(e) => tasten(e, i)}>
                    <span className="sn-no">{d.nr}</span>
                    <span>{d.titel}</span>
                    <span className="sn-plus" aria-hidden="true" />
                  </button>
                </h3>
                <div className="sn-body" id={`sn-dienst-${i}`} hidden={!offen}>
                  <div>
                    <p>{d.text}</p>
                    <p className="sn-detail">{d.detail}</p>
                    {d.link.href.startsWith('#')
                      ? <a className="sn-link" href={d.link.href}>{d.link.text} <span aria-hidden="true">↗</span></a>
                      : <Link className="sn-link" href={d.link.href}>{d.link.text} <span aria-hidden="true">↗</span></Link>}
                  </div>
                </div>
              </article>
            )
          })}
          <p className="sn-ergaenzung">Ergänzend buchbar: Catering mit Foodtruck und eine Kaffeestation.</p>
        </div>
      </div>
    </section>
    </>
  )
}
