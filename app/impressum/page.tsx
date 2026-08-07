import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'

const PAGE_URL = 'https://frankies-eventservice.de/impressum'

export const metadata: Metadata = {
  title: 'Impressum | Frankies Eventservice',
  description: 'Impressum und Anbieterkennzeichnung von Frankies Eventservice, Mustafa Yildirim, Lennestadt.',
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: true }, // Rechtstexte müssen nicht unbedingt in den Suchindex
}

// Gleiche Inline-Stile wie auf /agb, damit beide Rechtsseiten identisch aussehen.
const H2 = {
  color: 'var(--color-text)',
  fontSize: '1.5rem',
  marginTop: '2.5rem',
  marginBottom: '1rem',
  fontFamily: 'var(--font-display)',
} as const
const LINK = { color: 'var(--color-gold)', textDecoration: 'none' } as const

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <RevealWrapper>
        <main style={{ paddingTop: '100px', background: 'var(--color-bg)', minHeight: '100vh' }}>
          <section style={{ padding: '5rem 2rem 8rem' }}>
            <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p className="section-label">Rechtliches</p>
              <h1 className="section-title" style={{ marginBottom: '3rem' }}>Impressum</h1>

              <div className="legal-text-content" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
                <h2 style={H2}>Angaben gemäß § 5 TMG</h2>
                <p>
                  Frankies Eventservice<br />
                  Mustafa Yildirim<br />
                  Hachener Str. 7<br />
                  57368 Lennestadt<br />
                  Deutschland
                </p>

                <h2 style={H2}>Kontakt</h2>
                <p>
                  Telefon: <a href="tel:+4915142840916" style={LINK}>0151 42840916</a><br />
                  E-Mail: <a href="mailto:info@frankies-eventservice.de" style={LINK}>info@frankies-eventservice.de</a>
                </p>

                <h2 style={H2}>Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE354807768
                </p>

                <h2 style={H2}>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>
                  Dienstleistungserbringer im Bereich Veranstaltungs- und Eventservice.<br />
                  Tätigkeit als Einzelunternehmer.
                </p>

                <h2 style={H2}>Redaktionell verantwortlich</h2>
                <p>
                  Mustafa Yildirim<br />
                  Hachener Str. 7<br />
                  57368 Lennestadt
                </p>

                <h2 style={H2}>EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={LINK}>
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

                <h2 style={H2}>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                  einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid var(--color-gold)' }} />

                <p>
                  <strong>Frankies Eventservice</strong><br />
                  Mustafa Yildirim<br />
                  Hachener Str. 7, 57368 Lennestadt<br />
                  E-Mail: <a href="mailto:info@frankies-eventservice.de" style={LINK}>info@frankies-eventservice.de</a><br />
                  Web: <a href="https://www.frankies-eventservice.de" style={LINK}>www.frankies-eventservice.de</a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </RevealWrapper>
      <Footer />
    </>
  )
}
