'use client'

import { useEffect, useRef, useState } from 'react'
import GradualBlur from './GradualBlur'
import BookingModal from './BookingModal'

const WORDS = [
  'Ihr Fest', 'Ihr Schützenfest', 'Ihr Event', 'Ihre Hochzeit', 'Ihren Cocktailabend',
  'Ihr Dorffest', 'Ihre Firmenfeier', 'Ihre Party', 'Ihren JGA', 'Ihr Jubiläum', 'Ihr Vereinsfest', 'Ihr Sommerfest',
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)
  const [bookingOpen, setBookingOpen] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const spans = container.querySelectorAll<HTMLSpanElement>('.rotating-word')
    if (!spans.length) return
    // Aus- und Einblenden überlappen bewusst: würde das neue Wort erst nach dem
    // Ausblenden aktiviert, bliebe die Überschrift dazwischen sichtbar leer.
    const rotate = () => {
      const current = spans[currentRef.current]
      currentRef.current = (currentRef.current + 1) % spans.length
      const next = spans[currentRef.current]

      current.classList.remove('active')
      current.classList.add('exit')
      next.classList.add('active')
      // Nur das sichtbare Wort gehoert zur Ueberschrift. Ohne das lesen
      // Screenreader und Textauswerter alle zwoelf Woerter am Stueck vor —
      // gemessen 183 statt 31 Zeichen.
      current.setAttribute('aria-hidden', 'true')
      next.setAttribute('aria-hidden', 'false')

      window.setTimeout(() => current.classList.remove('exit'), 600)
    }
    const interval = setInterval(rotate, 2600)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const heroBg = document.querySelector<HTMLElement>('.hero-bg')
    const hero = document.querySelector<HTMLElement>('.hero')
    if (!heroBg || !hero) return
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      heroBg.style.transform = `translate(${x}px, ${y}px)`
    }
    hero.addEventListener('mousemove', onMouseMove)
    return () => hero.removeEventListener('mousemove', onMouseMove)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="hero" id="hero">
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      <div className="hero-bg" />
      <div className="hero-pattern" />
      <div className="hero-content">
        <div className="hero-badge">Eventservice im Sauerland</div>
        <h1>
          Wir machen
          <br />
          <span className="rotating-wrapper">
            <span className="rotating-words" ref={containerRef}>
              {WORDS.map((word, i) => (
                <span
                  key={word}
                  className={`rotating-word${i === 0 ? ' active' : ''}`}
                  aria-hidden={i !== 0}
                >
                  {word}
                </span>
              ))}
            </span>
          </span>
          <br />
          perfekt
        </h1>
        <p className="hero-sub">
          Ob Schützenfest, Hochzeit oder Firmenfeier — wir liefern den kompletten
          Getränke- und Thekenservice. Außerdem bringen wir unsere mobile Cocktailbar
          mit Bambustheke direkt zu Ihnen.
        </p>
        {/* Drei Angaben, die vorher nirgends auf der Seite standen. Bis hierhin
            enthielt die gesamte Website ausser der Telefonnummer keine einzige
            Zahl — das ist der Hauptgrund, warum sie austauschbar wirkte.
            Alle drei sind vom Betreiber und stimmen; nichts hier aufrunden. */}
        <ul className="hero-fakten">
          <li>Rund 20 Veranstaltungen in dieser Saison</li>
          <li>Von 80 bis 1.200 Gästen, mit bis zu 18 Leuten im Einsatz</li>
          <li>Antwort innerhalb von 24 Stunden</li>
        </ul>
        <div className="hero-actions">
          <button onClick={() => setBookingOpen(true)} className="btn-primary">Angebot anfordern</button>
          <a href="tel:+4915142840916" className="btn-secondary">Jetzt anrufen</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="line" />
        Mehr erfahren
      </div>
      <GradualBlur
        position="bottom"
        target="parent"
        height="10rem"
        strength={3}
        divCount={8}
        curve="bezier"
        exponential={true}
        opacity={1}
        zIndex={1}
      />
    </header>
  )
}
