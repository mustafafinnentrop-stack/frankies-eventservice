import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import BookingCTA from '@/components/BookingCTA'

const PAGE_URL = 'https://frankies-eventservice.de/getraenkeservice-schuetzenfest'
const OG_IMAGE = 'https://frankies-eventservice.de/IMG_5255.jpeg'

export const metadata: Metadata = {
  title: 'Getränkeservice Schützenfest Sauerland | Zapfservice & Thekenservice – Frankies',
  description: 'Professioneller Getränke- und Zapfservice für Schützenfeste im Kreis Olpe und Sauerland. Kompletter Thekenservice von Freitag bis Montag – zuverlässig und erfahren.',
  keywords: 'Getränkeservice Schützenfest Sauerland, Zapfservice Schützenfest Kreis Olpe, Thekenservice Schützenfest NRW, Bierzapfen Schützenfest, Ausschank mieten Sauerland, Festzelt Getränkeservice',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: PAGE_URL,
    siteName: 'Frankies Eventservice',
    title: 'Getränkeservice Schützenfest Sauerland | Zapfservice & Thekenservice – Frankies',
    description: 'Professioneller Getränke- und Zapfservice für Schützenfeste im Kreis Olpe und Sauerland. Kompletter Thekenservice von Freitag bis Montag.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Getränkeservice für Schützenfeste im Sauerland – Frankies Eventservice' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Getränkeservice Schützenfest Sauerland | Zapfservice & Thekenservice – Frankies',
    description: 'Professioneller Getränke- und Zapfservice für Schützenfeste im Kreis Olpe und Sauerland. Kompletter Thekenservice von Freitag bis Montag.',
    images: [OG_IMAGE],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Getränkeservice Schützenfest Sauerland',
  description: 'Professioneller Getränke- und Zapfservice für Schützenfeste im Kreis Olpe und Sauerland. Kompletter Thekenservice von Freitag bis Montag.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Frankies Eventservice',
    telephone: '+4915142840916',
    url: 'https://frankies-eventservice.de',
  },
  areaServed: ['Lennestadt', 'Olpe', 'Attendorn', 'Finnentrop', 'Kirchhundem', 'Wenden', 'Drolshagen', 'Sauerland'],
  serviceType: 'Getränkeservice Schützenfest',
  url: PAGE_URL,
}

export default function GetraenkeserviceSchuetzenfest() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <RevealWrapper>
        <main style={{ paddingTop: '100px', background: 'var(--color-bg)' }}>

          <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-surface)' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label reveal">Schützenfest im Sauerland</p>
              <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Getränkeservice<br />für Ihr Schützenfest
              </h1>
              <p className="reveal" style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                Wir übernehmen den kompletten Thekenservice bei Ihrem Schützenfest — von Freitag bis Montag, professionell und zuverlässig. Im Kreis Olpe und dem gesamten Sauerland sind wir der richtige Ansprechpartner.
              </p>
              <div className="reveal">
                <BookingCTA primary="Unverbindlich anfragen" secondary="Jetzt anrufen" calcomUrl="tel:+4915142840916" />
              </div>
            </div>
          </section>

          <section id="details" style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="cocktail-grid">
                <div className="cocktail-visual reveal-left glow-frame">
                  <Image
                    src="/IMG_5255.jpeg"
                    alt="Zapfservice und Thekenservice für Schützenfeste im Sauerland"
                    width={600}
                    height={750}
                    priority
                    unoptimized
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="reveal">
                  <p className="section-label">Erfahrener Zapfservice</p>
                  <h2 className="section-title">Professioneller<br />Thekenservice</h2>
                  <p className="section-text">
                    Ein Schützenfest steht und fällt mit dem Thekenservice. Frankies Eventservice übernimmt den gesamten Getränkeausschank — vom Aufbau bis zum Abbau. Unser eingespieltes Team sorgt dafür, dass kein Glas leer bleibt.
                  </p>
                  <p className="section-text" style={{ marginTop: '1rem' }}>
                    Wir sind vertraut mit dem Ablauf von Schützenfesten im Sauerland und wissen, worauf es ankommt: Pünktlichkeit, Verlässlichkeit und ein freundliches Team, das auch bei Hochbetrieb den Überblick behält.
                  </p>
                  <div className="cocktail-features stagger-children reveal" style={{ marginTop: '2rem' }}>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">🍺</span>
                      <div>
                        <strong>Zapfservice</strong>
                        <span>Fassbier-Ausschank</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">🏅</span>
                      <div>
                        <strong>Erfahren</strong>
                        <span>Vertraut mit dem Brauchtum</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">📅</span>
                      <div>
                        <strong>Ganzes Wochenende</strong>
                        <span>Fr · Sa · So · Mo</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">✓</span>
                      <div>
                        <strong>Alles aus einer Hand</strong>
                        <span>Aufbau · Service · Abbau</span>
                      </div>
                    </div>
                  </div>
                  <a href="tel:+4915142840916" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                    Jetzt anrufen
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p className="section-label">Das ganze Wochenende</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Von Freitag bis Montag</h2>
                <p className="section-text" style={{ margin: '0 auto' }}>
                  Wir sind das gesamte Schützenfest-Wochenende mit einem eingespielten Team vor Ort.
                </p>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                {[
                  { day: 'Freitag', title: 'Aufbau & Kommers', text: 'Wir bauen die Theke auf, schließen die Fässer an und sind bereit für den Kommersabend.' },
                  { day: 'Samstag', title: 'Fest & Ball', text: 'Pünktlich für Vogelschießen, Parade und Krönungsball — auch bei Hochbetrieb.' },
                  { day: 'Sonntag', title: 'Frühschoppen', text: 'Schon zum Frühschoppen zapfbereit. Der längste Tag des Festes ist unser Zuhause.' },
                  { day: 'Montag', title: 'Ausklang & Abbau', text: 'Wir sind bis zum letzten Glas dabei — danach bauen wir alles sauber ab.' },
                ].map(phase => (
                  <div key={phase.day} style={{ background: 'var(--color-surface-2)', border: '1px solid rgba(200,164,78,0.12)', padding: '2rem' }}>
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{phase.day}</p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: phase.title }} />
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300 }}>{phase.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="section-label">Das bringen wir mit</p>
                <h2 className="section-title" style={{ margin: '0 auto' }}>Alles was Sie brauchen</h2>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                {[
                  { icon: '🍻', title: 'Zapfanlagen', text: 'Professionelle Fassbier-Zapfanlagen für Hochbetrieb.' },
                  { icon: '🏗️', title: 'Theken-Aufbau', text: 'Komplette Theken-Infrastruktur, individuell für Ihre Location.' },
                  { icon: '👥', title: 'Erfahrenes Team', text: 'Geschultes Personal, das auch bei Hochbetrieb den Überblick behält.' },
                  { icon: '📦', title: 'Logistik', text: 'Wir kümmern uns um Anlieferung, Kühlung und Nachschub.' },
                ].map(item => (
                  <div key={item.title} style={{ background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.1)', padding: '2rem' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 400, marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)', textAlign: 'center' }}>
            <div className="section-container reveal">
              <p className="section-label">Jetzt anfragen</p>
              <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Bereit für Ihr Schützenfest?</h2>
              <p className="section-text" style={{ margin: '0 auto 2.5rem' }}>
                Sprechen wir über Ihr Fest. Termine werden schnell knapp — lieber früh anfragen.
              </p>
              <BookingCTA primary="Jetzt anfragen" secondary="Direkt anrufen" calcomUrl="tel:+4915142840916" />
            </div>
          </section>

          <section style={{ padding: '4rem 2rem' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>Weitere Leistungen</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { href: '/cocktailbar-lennestadt', label: 'Mobile Cocktailbar' },
                  { href: '/hochzeit-sauerland', label: 'Thekenservice Hochzeit' },
                  { href: '/eventservice-kreis-olpe', label: 'Eventservice Kreis Olpe' },
                  { href: '/', label: '← Zur Startseite' },
                ].map(link => (
                  <a key={link.href} href={link.href} style={{ padding: '0.7rem 1.4rem', border: '1px solid rgba(200,164,78,0.2)', color: 'var(--color-text-muted)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em' }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </section>

        </main>
      </RevealWrapper>
      <Footer />
    </>
  )
}
