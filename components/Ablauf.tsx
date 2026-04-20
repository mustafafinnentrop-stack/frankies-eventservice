'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Anfrage',
    text: 'Zunächst kontaktieren Sie uns mit Datum, Ort und Art der Veranstaltung. Anschließend melden wir uns innerhalb von 24 Stunden bei Ihnen zurück.',
  },
  {
    num: '02',
    title: 'Planung',
    text: 'Danach besprechen wir gemeinsam den Umfang und die Personalgröße. Außerdem klären wir alle Details, damit der Ablauf reibungslos funktioniert.',
  },
  {
    num: '03',
    title: 'Durchführung',
    text: 'Am Veranstaltungstag ist unser Team pünktlich vor Ort. Sobald alles aufgebaut ist, übernehmen wir den kompletten Getränkeservice.',
  },
  {
    num: '04',
    title: 'Abschluss',
    text: 'Nach der Veranstaltung räumen wir alles sauber auf. Folglich hinterlassen wir den Veranstaltungsort ordentlich und aufgeräumt — ohne Mehraufwand für Sie.',
  },
]

export default function Ablauf() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.ablauf-card')
    if (!cards) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('ablauf-visible') }),
      { threshold: 0.15 }
    )
    cards.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="ablauf" style={{ padding: '5rem 2rem', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">So arbeiten wir</p>
          <h2 className="section-title">In vier Schritten<br />zu Ihrem Event</h2>
        </div>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="ablauf-card"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid rgba(200,164,78,0.12)',
                borderRadius: '4px',
                padding: '2rem',
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3rem',
                color: 'rgba(200,164,78,0.25)',
                lineHeight: 1,
                marginBottom: '1rem',
              }}>
                {step.num}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: 400,
                marginBottom: '0.75rem',
                color: 'var(--color-text)',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                fontWeight: 300,
              }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ablauf-card.ablauf-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
