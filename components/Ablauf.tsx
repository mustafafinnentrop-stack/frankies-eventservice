'use client'

import ScrollStack, { ScrollStackItem } from './ScrollStack'

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
  return (
    <section id="ablauf" style={{ padding: 0 }}>
      <div style={{ padding: '4rem 2rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal">
          <p className="section-label">So arbeiten wir</p>
          <h2 className="section-title">In vier Schritten<br />zu Ihrem Event</h2>
        </div>
      </div>

      <div style={{ height: '600px', position: 'relative', overflow: 'hidden' }}>
        <ScrollStack
          itemDistance={120}
          itemScale={0.04}
          itemStackDistance={25}
          stackPosition="25%"
          scaleEndPosition="15%"
          baseScale={0.88}
          useWindowScroll={false}
        >
          {steps.map((step) => (
            <ScrollStackItem key={step.num}>
              <div style={{
                background: 'var(--color-surface-2)',
                border: '1px solid rgba(200,164,78,0.12)',
                borderRadius: '24px',
                padding: '2.5rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.5rem',
                  color: 'rgba(200,164,78,0.2)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}>
                  {step.num}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  marginBottom: '0.75rem',
                  color: 'var(--color-text)',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>
                  {step.text}
                </p>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  )
}
