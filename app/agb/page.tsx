import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import RevealWrapper from '@/components/RevealWrapper'
import { ABSCHNITTE, ANBIETER, ANBIETER_KONTAKT, STAND } from '@/components/agb-daten'

const PAGE_URL = 'https://frankies-eventservice.de/agb'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) | Frankies Eventservice',
  description: 'Allgemeine Geschäftsbedingungen von Frankies Eventservice – Thekenservice, Getränkecatering, mobile Cocktailbar, Personal und Equipmentverleih.',
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: true }, // Rechtstexte müssen nicht unbedingt in den Suchindex
}

/*
  Der Vertragstext steht in components/agb-daten.ts, nicht hier. Diese Seite
  ist nur die Darstellung; das Rechts-Overlay im Footer zeigt denselben Text
  aus derselben Datei.
*/
const H2: React.CSSProperties = {
  color: 'var(--color-text)',
  fontSize: '1.5rem',
  marginTop: '2.5rem',
  marginBottom: '1rem',
  fontFamily: 'var(--font-display)',
}

export default function AGBPage() {
  return (
    <>
      <Navbar />
      <div className="content-layer">
        <RevealWrapper>
        <main style={{ paddingTop: '100px', background: 'var(--color-bg)', minHeight: '100vh' }}>
          <section style={{ padding: '5rem 2rem 8rem' }}>
            <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p className="section-label">Rechtliches</p>
              <h1 className="section-title" style={{ marginBottom: '3rem' }}>Allgemeine Geschäftsbedingungen (AGB)</h1>

              <div className="legal-text-content" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
                <p style={{ marginBottom: '2rem' }}><strong>Stand:</strong> {STAND}</p>

                {ABSCHNITTE.map((a) => (
                  <div key={a.nr}>
                    <h2 style={H2}>{`${a.nr}. ${a.titel}`}</h2>
                    {a.absaetze.map((text, i) => (
                      <p key={i} style={{ marginBottom: '1rem' }}>{text}</p>
                    ))}
                  </div>
                ))}

                <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid var(--color-gold)' }} />

                <p>
                  {ANBIETER}<br />
                  Telefon:{' '}
                  <a href={`tel:${ANBIETER_KONTAKT.telefonLink}`} style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>
                    {ANBIETER_KONTAKT.telefon}
                  </a><br />
                  E-Mail:{' '}
                  <a href={`mailto:${ANBIETER_KONTAKT.email}`} style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>
                    {ANBIETER_KONTAKT.email}
                  </a><br />
                  USt-IdNr.: {ANBIETER_KONTAKT.ustId}
                </p>
              </div>
            </div>
          </section>
        </main>
        </RevealWrapper>
      </div>
      <CinematicFooter />
    </>
  )
}
