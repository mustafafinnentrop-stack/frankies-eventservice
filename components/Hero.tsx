'use client'

import { useEffect, useRef } from 'react'

const WORDS = [
  'Fest', 'Schützenfest', 'Event', 'Hochzeit', 'Cocktailabend',
  'Dorffest', 'Firmenfeier', 'Party', 'JGA', 'Jubiläum', 'Vereinsfest', 'Sommerfest',
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const spans = container.querySelectorAll<HTMLSpanElement>('.rotating-word')
    if (!spans.length) return

    const rotate = () => {
      const current = spans[currentRef.current]
      current.classList.add('exit')
      current.classList.remove('active')
      currentRef.current = (currentRef.current + 1) % spans.length
      const next = spans[currentRef.current]
      setTimeout(() => {
        current.classList.remove('exit')
        next.classList.add('active')
      }, 400)
    }

    const interval = setInterval(rotate, 2200)
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
      <div className="hero-bg" />
      <div className="hero-pattern" />
      <div className="hero-content">
        <div className="hero-badge">Eventservice im Sauerland</div>
        <h1>
          Wir machen Ihr
          <br />
          <span className="rotating-wrapper">
            <span className="rotating-words" ref={containerRef}>
              {WORDS.map((word, i) => (
                <span key={word} className={`rotating-word${i === 0 ? ' active' : ''}`}>
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
          mit Bulli und Bambustheke direkt zu Ihnen.
        </p>
        <div className="hero-actions">
          <a href="tel:+4915142840916" className="btn-primary">Jetzt anrufen</a>
          <a href="#leistungen" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollTo('leistungen') }}>
            Unsere Leistungen
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="line" />
        Mehr erfahren
      </div>
    </header>
  )
}
