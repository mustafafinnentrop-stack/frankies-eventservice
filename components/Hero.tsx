'use client'

import { useEffect, useRef, useState } from 'react'
import GradualBlur from './GradualBlur'
import BookingModal from './BookingModal'

const WORDS = [
  'Ihr Fest', 'Ihr Schützenfest', 'Ihr Event', 'Ihre Hochzeit', 'Ihren Cocktailabend',
  'Ihr Dorffest', 'Ihre Firmenfeier', 'Ihre Party', 'Ihren JGA', 'Ihr Jubiläum', 'Ihr Vereinsfest', 'Ihr Sommerfest',
]

export default function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false)



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
          Professioneller Getränke- & Thekenservice<br />
          <span className="hero-highlight">für Ihr Event im Sauerland</span>
        </h1>
        <p className="hero-sub">
          Ob Schützenfest, Hochzeit oder Firmenfeier — wir liefern den kompletten
          Getränke- und Thekenservice. Außerdem bringen wir unsere mobile Cocktailbar
          mit Bulli und Bambustheke direkt zu Ihnen.
        </p>
        <div className="hero-actions">
          <button onClick={() => setBookingOpen(true)} className="btn-primary">Unverbindlich anfragen</button>
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
