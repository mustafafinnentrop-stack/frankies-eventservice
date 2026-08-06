'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    title: 'Anfrage',
    text: 'Sie kontaktieren uns mit Datum, Ort und Art der Veranstaltung. Wir melden uns innerhalb von 24 Stunden zurück.',
  },
  {
    title: 'Planung',
    text: 'Gemeinsam besprechen wir Umfang und Personalgröße. Alle Details werden vorab geklärt, damit der Ablauf sitzt.',
  },
  {
    title: 'Durchführung',
    text: 'Am Veranstaltungstag ist unser Team pünktlich vor Ort, baut auf und übernimmt den kompletten Getränkeservice.',
  },
  {
    title: 'Abschluss',
    text: 'Nach der Veranstaltung räumen wir auf und hinterlassen den Ort ordentlich — ohne Mehraufwand für Sie.',
  },
]

export default function Ablauf() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.flow-step')
    if (!items) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
      { threshold: 0.2 }
    )
    items.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="ablauf">
      <div className="section-container">
        <div className="reveal" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <p className="section-label">So arbeiten wir</p>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            In vier Schritten<br />zu Ihrem Event
          </h2>
        </div>

        <div className="flow" ref={ref}>
          {/* Laufende Verbindungslinie. Reines CSS statt einer Animations-
              bibliothek — bewegt wird nur der Strichversatz. */}
          <span className="flow-line" aria-hidden="true" />

          {steps.map((step, i) => (
            <div className="flow-step" key={step.title} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="flow-marker" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flow-card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
