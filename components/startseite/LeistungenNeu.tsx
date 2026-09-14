'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { FLATS } from '@/components/preise-daten'

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
    text: 'Wir kommen mit Theke, Zapftechnik und bis zu zwanzig Leuten und führen den gesamten Ausschank durch — von Aufbau über Service bis Abbau.',
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
    text: 'Sie kaufen die Getränke für Ihr Fest bei uns. Die Menge planen wir gemeinsam, geliefert und gekühlt kommt sie an.',
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
    <section className="sn-leistungen" id="leistungen" aria-labelledby="sn-leistungen-titel">
      <div className="sn-top sn-reveal">
        <span className="sn-eyebrow">02 / Was wir können</span>
        <Link className="sn-link" href="/service">Alle Leistungen <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="sn-heading sn-reveal">
        <h2 id="sn-leistungen-titel">Sie haben den Anlass.<br />Wir kümmern uns <em>um den Rest.</em></h2>
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
  )
}
