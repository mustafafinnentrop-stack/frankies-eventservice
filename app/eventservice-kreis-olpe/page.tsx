import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import BookingCTA from '@/components/BookingCTA'

const PAGE_URL = 'https://frankies-eventservice.de/eventservice-kreis-olpe'
const OG_IMAGE = 'https://frankies-eventservice.de/wp-content/uploads/2026/03/preview-1.webp'

export const metadata: Metadata = {
  title: 'Eventservice Kreis Olpe | Getränke- & Veranstaltungsservice – Frankies Eventservice',
  description: 'Ihr Eventservice im Kreis Olpe und Sauerland. Professioneller Getränke- und Thekenservice für alle Veranstaltungen jeder Art – zuverlässig, flexibel und erfahren.',
  keywords: 'Eventservice Kreis Olpe, Veranstaltungsservice Sauerland, Getränkeservice Olpe, Thekenservice Attendorn, Barservice Finnentrop, Eventdienstleister NRW, Getränkeausschank mieten',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: PAGE_URL,
    siteName: 'Frankies Eventservice',
    title: 'Eventservice Kreis Olpe | Getränke- & Veranstaltungsservice – Frankies Eventservice',
    description: 'Ihr Eventservice im Kreis Olpe und Sauerland. Professioneller Getränke- und Thekenservice für alle Veranstaltungen jeder Art.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Eventservice im Kreis Olpe – Frankies Eventservice' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eventservice Kreis Olpe | Getränke- & Veranstaltungsservice – Frankies Eventservice',
    description: 'Ihr Eventservice im Kreis Olpe und Sauerland. Professioneller Getränke- und Thekenservice für alle Veranstaltungen jeder Art.',
    images: [OG_IMAGE],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Eventservice Kreis Olpe',
  description: 'Professioneller Getränke- und Thekenservice für alle Veranstaltungen im Kreis Olpe und Sauerland — Schützenfeste, Hochzeiten, Vereinsfeste, Firmenfeiern.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Frankies Eventservice',
    telephone: '+4915142840916',
    url: 'https://frankies-eventservice.de',
  },
  areaServed: ['Lennestadt', 'Olpe', 'Attendorn', 'Finnentrop', 'Kirchhundem', 'Wenden', 'Drolshagen', 'Schmallenberg', 'Sauerland'],
  serviceType: 'Eventservice',
  url: PAGE_URL,
}

export default function EventserviceKreisOlpe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <RevealWrapper>
        <main style={{ paddingTop: '100px', background: 'var(--color-bg)' }}>

          <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-surface)' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label reveal">Kreis Olpe &amp; Sauerland</p>
              <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Eventservice<br />im Kreis Olpe
              </h1>
              <p className="reveal" style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                Von Lennestadt bis Attendorn — Frankies Eventservice ist Ihr Ansprechpartner für professionellen Getränke- und Thekenservice im gesamten Kreis Olpe und Sauerland.
              </p>
              <div className="reveal">
                <BookingCTA primary="Unverbindlich anfragen →" secondary="0151 42840916" calcomUrl="tel:+4915142840916" />
              </div>
            </div>
          </section>

          <section id="details" style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="cocktail-grid">
                <div className="reveal">
                  <p className="section-label">Ihre Veranstaltung</p>
                  <h2 className="section-title">Veranstaltungsservice<br />für alle Anlässe</h2>
                  <p className="section-text">
                    Egal ob Schützenfest, Hochzeit, Vereinsjubiläum, Firmenfeier oder Dorffest — wir bieten Ihnen einen zuverlässigen und professionellen Getränkeservice für Veranstaltungen jeder Art und jeder Größe im Kreis Olpe.
                  </p>
                  <p className="section-text" style={{ marginTop: '1rem' }}>
                    Mit Sitz in Lennestadt sind wir schnell vor Ort — in Olpe, Attendorn, Finnentrop, Kirchhundem, Wenden, Drolshagen und allen weiteren Gemeinden des Kreises. Wir kennen die Region und ihre Veranstaltungskultur.
                  </p>
                  <div className="cocktail-features stagger-children reveal" style={{ marginTop: '2rem' }}>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">🎯</span>
                      <div>
                        <strong>Flexibel</strong>
                        <span>Jede Größe, jeder Anlass</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">⚡</span>
                      <div>
                        <strong>Schnell vor Ort</strong>
                        <span>Zentrale Lage in Lennestadt</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">🤝</span>
                      <div>
                        <strong>Verlässlich</strong>
                        <span>Pünktlich &amp; professionell</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">📍</span>
                      <div>
                        <strong>Region &amp; Kultur</strong>
                        <span>Wir kennen das Sauerland</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cocktail-visual reveal-right glow-frame">
                  <Image
                    src="https://frankies-eventservice.de/wp-content/uploads/2026/03/preview-1.webp"
                    alt="Eventservice und Getränkeservice im Kreis Olpe und Sauerland"
                    width={600}
                    height={750}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p className="section-label">Unser Einsatzgebiet</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Der gesamte Kreis Olpe</h2>
                <p className="section-text" style={{ margin: '0 auto' }}>
                  Mit Sitz in Lennestadt decken wir das komplette Kreisgebiet und angrenzende Orte im Sauerland ab.
                </p>
              </div>
              <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                {['Lennestadt', 'Olpe', 'Attendorn', 'Finnentrop', 'Kirchhundem', 'Wenden', 'Drolshagen', 'Schmallenberg', 'Plettenberg', 'Meschede', 'Kreuztal'].map(ort => (
                  <span key={ort} style={{ padding: '0.65rem 1.4rem', border: '1px solid rgba(200,164,78,0.2)', fontSize: '0.85rem', color: 'var(--color-text)', letterSpacing: '0.05em' }}>
                    {ort}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="section-label">Unsere Leistungen</p>
                <h2 className="section-title" style={{ margin: '0 auto' }}>Was wir für Sie tun</h2>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {[
                  { icon: '🍺', title: 'Getränkeservice', text: 'Kompletter Ausschank inkl. Zapfanlagen, Gläser, Kühlung.', href: '/getraenkeservice-schuetzenfest' },
                  { icon: '🍸', title: 'Mobile Cocktailbar', text: 'Bulli-Bar mit Bambustheke und frischen Cocktails.', href: '/cocktailbar-lennestadt' },
                  { icon: '💍', title: 'Hochzeits-Service', text: 'Von Sektempfang bis Late-Night — der passende Rahmen.', href: '/hochzeit-sauerland' },
                  { icon: '🎪', title: 'Dorf- &amp; Vereinsfeste', text: 'Erfahrung mit traditionellen Festen im Sauerland.' },
                  { icon: '🏢', title: 'Firmenfeiern', text: 'Sommerfest, Jubiläum oder Weihnachtsfeier mit Stil.' },
                  { icon: '🎂', title: 'Private Feiern', text: 'Geburtstag, Taufe, Konfirmation oder Gartenparty.' },
                ].map(item => {
                  const content = (
                    <>
                      <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.icon}</div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: item.title }} />
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                      {item.href && (
                        <span style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--color-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                          Mehr erfahren →
                        </span>
                      )}
                    </>
                  )
                  return item.href ? (
                    <a key={item.title} href={item.href} style={{ background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.1)', padding: '2rem', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease', display: 'block' }}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.title} style={{ background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.1)', padding: '2rem' }}>
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <div className="reveal" style={{ padding: '3rem 2rem', background: 'var(--color-surface-2)', border: '1px solid rgba(200,164,78,0.15)', maxWidth: '700px', margin: '0 auto' }}>
                <p className="section-label">Kontakt &amp; Adresse</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '1rem' }}>
                  Frankies Eventservice
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '1.5rem' }}>
                  Mustafa Yildirim<br />
                  Hachener Str. 7 · 57368 Lennestadt
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:+4915142840916" className="btn-primary">0151 42840916</a>
                  <a href="mailto:info@frankies-eventservice.de" className="btn-secondary">E-Mail</a>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: '4rem 2rem' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>Spezifische Leistungen</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { href: '/cocktailbar-lennestadt', label: 'Mobile Cocktailbar' },
                  { href: '/getraenkeservice-schuetzenfest', label: 'Getränkeservice Schützenfest' },
                  { href: '/hochzeit-sauerland', label: 'Thekenservice Hochzeit' },
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
