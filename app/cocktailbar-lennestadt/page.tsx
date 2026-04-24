import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import BookingCTA from '@/components/BookingCTA'

const PAGE_URL = 'https://frankies-eventservice.de/cocktailbar-lennestadt'
const OG_IMAGE = 'https://frankies-eventservice.de/wp-content/uploads/2026/03/preview-1.webp'

export const metadata: Metadata = {
  title: 'Mobile Cocktailbar Lennestadt | Bulli-Bar & Bambustheke – Frankies Eventservice',
  description: 'Mobile Cocktailbar in Lennestadt und Kreis Olpe mieten. Mit Bulli-Bar und Bambustheke kommen wir direkt zu Ihnen – für Hochzeiten, Geburtstage, JGA und Firmenfeiern.',
  keywords: 'mobile Cocktailbar Lennestadt, Cocktailbar mieten Kreis Olpe, Bulli Bar, Bambustheke, Cocktailbar Hochzeit Sauerland, JGA Cocktailbar, Barkeeper mieten NRW',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: PAGE_URL,
    siteName: 'Frankies Eventservice',
    title: 'Mobile Cocktailbar Lennestadt | Bulli-Bar & Bambustheke – Frankies Eventservice',
    description: 'Mobile Cocktailbar in Lennestadt und Kreis Olpe mieten. Mit Bulli-Bar und Bambustheke kommen wir direkt zu Ihnen.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Mobile Cocktailbar mit Bulli und Bambustheke – Frankies Eventservice' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Cocktailbar Lennestadt | Bulli-Bar & Bambustheke – Frankies Eventservice',
    description: 'Mobile Cocktailbar in Lennestadt und Kreis Olpe mieten. Mit Bulli-Bar und Bambustheke kommen wir direkt zu Ihnen.',
    images: [OG_IMAGE],
  },
}

const faq = [
  { q: 'Wie weit im Voraus sollte ich buchen?', a: 'Für Hochzeiten und größere Events empfehlen wir 3–6 Monate im Voraus. Für Geburtstage oder kleinere Feiern reichen oft 4–6 Wochen. Bei kurzfristigen Anfragen einfach anrufen.' },
  { q: 'Was kostet die mobile Cocktailbar?', a: 'Der Preis richtet sich nach Veranstaltungsdauer, Gästeanzahl und Wunschleistungen. Wir erstellen ein individuelles Angebot — das Erstgespräch ist kostenlos.' },
  { q: 'Welche Cocktails gibt es?', a: 'Klassiker wie Mojito, Aperol Spritz, Hugo und Caipirinha plus individuelle Kreationen. Alkoholfreie Alternativen sind selbstverständlich verfügbar.' },
  { q: 'Wie viel Platz braucht die Bambustheke?', a: 'Ca. 3×2 Meter plus Zugang für den Bulli. Wir klären das bei der Voranfrage — wir passen uns an Ihre Location an.' },
  { q: 'Bringt ihr auch Gläser und Zutaten mit?', a: 'Ja — Gläser, Shaker, Zutaten und alle nötigen Utensilien sind dabei. Sie müssen sich um nichts kümmern.' },
  { q: 'Kommt ihr auch bei Außen-Events?', a: 'Ja. Garten, Wiese, Hof, Festzelt — wir sind vollständig mobil. Bei extremem Wetter besprechen wir das vorab.' },
]

const packages = [
  {
    badge: 'Einstieg',
    name: 'Flat 30',
    highlights: ['30 Cocktails (Mindestabnahme)', '1,5 Stunden Barservice', 'Barkeeper & Equipment inklusive', 'Auf- und Abbau inklusive'],
    ideal: 'Gartenparty, Geburtstag, kleine Feier',
    pkg: 'Flat 30',
  },
  {
    badge: 'Beliebt',
    name: 'Flat 50',
    highlights: ['50 Cocktails (Mindestabnahme)', '2,5 Stunden Barservice', 'Bambustheke oder Bulli-Bar', 'Barkeeper & Equipment inklusive', 'Auf- und Abbau inklusive'],
    ideal: 'JGA, Late-Night-Bar bei Hochzeiten, Firmenfeier',
    pkg: 'Flat 50',
    featured: true,
  },
  {
    badge: 'Großes Event',
    name: 'Flat 100',
    highlights: ['100 Cocktails (Mindestabnahme)', '3,5 Stunden Barservice', 'Bulli + Bambustheke aufgebaut', '2 Barkeeper', 'Auf- und Abbau inklusive'],
    ideal: 'Hochzeit, Schützenfest, Firmen-Sommerfest',
    pkg: 'Flat 100',
  },
  {
    badge: 'Maßgeschneidert',
    name: 'Individuell',
    highlights: ['Über 100 Cocktails', 'Dauer nach Absprache', 'Für besondere Anforderungen', 'Persönliche Beratung'],
    ideal: 'Mehrtägige Events, Schützenfeste, große Vereinsfeste',
    pkg: 'Individuell',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Cocktailbar Lennestadt',
  description: 'Mobile Cocktailbar mit Bulli-Bar und Bambustheke für Hochzeiten, JGA, Geburtstage und Firmenfeiern im Kreis Olpe und Sauerland.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Frankies Eventservice',
    telephone: '+4915142840916',
    url: 'https://frankies-eventservice.de',
  },
  areaServed: ['Lennestadt', 'Finnentrop', 'Kirchhundem', 'Attendorn', 'Olpe', 'Wenden', 'Drolshagen', 'Sauerland'],
  serviceType: 'Mobile Cocktailbar',
  url: PAGE_URL,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function CocktailbarLennestadt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <RevealWrapper>
        <main style={{ paddingTop: '100px', background: 'var(--color-bg)' }}>

          {/* Hero */}
          <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-surface)' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label reveal">Lennestadt &amp; Kreis Olpe</p>
              <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Mobile Cocktailbar<br />in Lennestadt mieten
              </h1>
              <p className="reveal" style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                Unsere mobile Cocktailbar kommt mit Bulli und Bambustheke direkt zu Ihnen — egal ob Garten, Hof, Halle oder Festzelt.
              </p>
              <div className="reveal">
                <BookingCTA primary="Unverbindlich anfragen" secondary="Jetzt anrufen" calcomUrl="tel:+4915142840916" />
              </div>
            </div>
          </section>

          {/* Image + Features */}
          <section style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="cocktail-grid">
                <div className="cocktail-visual reveal-left glow-frame">
                  <Image src="https://frankies-eventservice.de/wp-content/uploads/2026/03/preview-1.webp" alt="Mobile Cocktailbar mit Bulli und Bambustheke für Events in Lennestadt" width={600} height={750} priority unoptimized style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="reveal">
                  <p className="section-label">Einzigartiges Flair</p>
                  <h2 className="section-title">Cocktailbar mieten<br />im Kreis Olpe</h2>
                  <p className="section-text">Frankies Eventservice bietet vollständige mobile Cocktailbars für alle Veranstaltungen in Lennestadt, Finnentrop, Kirchhundem, Attendorn und dem gesamten Kreis Olpe. Unser VW-Bulli mit integrierter Bar ist der Blickfang auf jedem Event.</p>
                  <p className="section-text" style={{ marginTop: '1rem' }}>Die stylische Bambustheke sorgt für einzigartiges Ambiente — Hochzeitsfeier, JGA, Geburtstag oder Firmenfeier. Unsere erfahrenen Barkeeper bereiten frische Cocktailkreationen direkt bei Ihnen zu.</p>
                  <div className="cocktail-features stagger-children reveal" style={{ marginTop: '2rem' }}>
                    <div className="cocktail-feature"><span className="cocktail-feature-icon">🚐</span><div><strong>Bulli-Bar</strong><span>VW-Bulli als mobiler Blickfang</span></div></div>
                    <div className="cocktail-feature"><span className="cocktail-feature-icon">🎋</span><div><strong>Bambustheke</strong><span>Stilvolle Theke mit Urlaubsflair</span></div></div>
                    <div className="cocktail-feature"><span className="cocktail-feature-icon">🍸</span><div><strong>Frische Cocktails</strong><span>Klassiker &amp; Kreationen</span></div></div>
                    <div className="cocktail-feature"><span className="cocktail-feature-icon">📍</span><div><strong>Mobiler Service</strong><span>±25 km um Lennestadt</span></div></div>
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <BookingCTA primary="Termin vereinbaren" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Packages */}
          <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p className="section-label">Unsere Pakete</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Das passende Paket für Ihre Feier</h2>
                <p className="section-text" style={{ margin: '0 auto' }}>
                  Wählen Sie das Paket, das zu Ihrer Veranstaltung passt — oder wir erstellen Ihnen ein individuelles Angebot.
                </p>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {packages.map(p => (
                  <div
                    key={p.name}
                    style={{
                      background: p.featured ? 'linear-gradient(145deg, rgba(200,164,78,0.08), var(--color-surface-2))' : 'var(--color-surface-2)',
                      border: p.featured ? '1px solid rgba(200,164,78,0.45)' : '1px solid rgba(200,164,78,0.12)',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                    }}
                  >
                    {p.featured && (
                      <span style={{ position: 'absolute', top: '-1px', right: '1.5rem', background: 'var(--color-gold)', color: 'var(--color-bg)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.25rem 0.75rem' }}>
                        Empfohlen
                      </span>
                    )}
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.badge}</p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, marginBottom: '1.25rem' }}>{p.name}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', flex: 1 }}>
                      {p.highlights.map(h => (
                        <li key={h} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--color-text-muted)', fontWeight: 300, lineHeight: 1.6, marginBottom: '0.4rem' }}>
                          <span style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                      Ideal für: {p.ideal}
                    </p>
                    <BookingCTA primary={`${p.name} anfragen`} pkg={p.pkg} />
                  </div>
                ))}
              </div>
              <p className="reveal" style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '2rem', fontWeight: 300 }}>
                Alle Preise auf Anfrage — kostenloses Erstgespräch inklusive.
              </p>
            </div>
          </section>

          {/* Booking Banner */}
          <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(200,164,78,0.07) 0%, var(--color-bg) 100%)', borderTop: '1px solid rgba(200,164,78,0.12)', borderBottom: '1px solid rgba(200,164,78,0.12)' }}>
            <div className="section-container reveal">
              <BookingCTA layout="banner" primary="Unverbindlich anfragen" />
            </div>
          </section>

          {/* Occasions */}
          <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p className="section-label">Für jeden Anlass</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Ideal für Ihre Feier</h2>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {[
                  { icon: '💍', title: 'Hochzeiten', text: 'Stilvoller Sektempfang oder Late-Night-Cocktailservice.' },
                  { icon: '🎉', title: 'Junggesellenabschied', text: 'Unvergesslicher JGA mit frischen Cocktails und Urlaubsflair.' },
                  { icon: '🎂', title: 'Geburtstage', text: 'Runder Geburtstag oder Gartenparty — wir machen das Highlight.' },
                  { icon: '🏢', title: 'Firmenfeiern', text: 'Sommerfest, Jubiläum oder Weihnachtsfeier.' },
                  { icon: '🎯', title: 'Schützenfeste', text: 'Cocktail-Highlight neben dem klassischen Ausschank.' },
                  { icon: '🎪', title: 'Dorf- &amp; Vereinsfeste', text: 'Kompletter Thekenservice mit Cocktail-Bar.' },
                ].map(item => (
                  <div key={item.title} style={{ background: 'var(--color-surface-2)', border: '1px solid rgba(200,164,78,0.1)', padding: '2rem' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 400, marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="section-label">In 4 Schritten</p>
                <h2 className="section-title" style={{ margin: '0 auto' }}>So läuft es ab</h2>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                {[
                  { num: '01', title: 'Anfrage', text: 'Formular ausfüllen oder direkt anrufen — kostenlos und unverbindlich.' },
                  { num: '02', title: 'Angebot', text: 'Individuelles Angebot mit Cocktailkarte innerhalb von 24h.' },
                  { num: '03', title: 'Aufbau', text: 'Bulli rollt an, Bambustheke steht in 45 Minuten.' },
                  { num: '04', title: 'Genießen', text: 'Profi-Barkeeper servieren — Sie feiern entspannt.' },
                ].map(s => (
                  <div key={s.num} style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(200,164,78,0.2)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-gold)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.num}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.4rem' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, fontWeight: 300 }}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)' }}>
            <div className="section-container" style={{ maxWidth: '720px' }}>
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="section-label">Häufige Fragen</p>
                <h2 className="section-title" style={{ margin: '0 auto' }}>FAQ Cocktailbar</h2>
              </div>
              <div className="reveal">
                {faq.map((item, i) => (
                  <details key={i} style={{ borderTop: '1px solid rgba(200,164,78,0.12)', padding: '1.25rem 0' }}>
                    <summary style={{ cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                      {item.q}<span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>+</span>
                    </summary>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.75, fontWeight: 300, marginTop: '0.75rem', paddingRight: '2rem' }}>{item.a}</p>
                  </details>
                ))}
                <div style={{ borderTop: '1px solid rgba(200,164,78,0.12)' }} />
              </div>
            </div>
          </section>

          {/* Coverage */}
          <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
            <div className="section-container reveal">
              <p className="section-label">Einsatzgebiet</p>
              <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Wir kommen zu Ihnen</h2>
              <p className="section-text" style={{ margin: '0 auto 1.5rem' }}>
                Im Umkreis von ca. 25 km um Lennestadt — bei weiter entfernten Events sprechen Sie uns einfach an.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
                {['Lennestadt', 'Finnentrop', 'Kirchhundem', 'Attendorn', 'Olpe', 'Wenden', 'Drolshagen', 'Schmallenberg', 'Eslohe', 'Plettenberg'].map(ort => (
                  <span key={ort} style={{ padding: '0.5rem 1.1rem', border: '1px solid rgba(200,164,78,0.2)', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{ort}</span>
                ))}
              </div>
              <BookingCTA primary="Jetzt anfragen" secondary="Jetzt anrufen" calcomUrl="tel:+4915142840916" />
            </div>
          </section>

          <section style={{ padding: '3rem 2rem', background: 'var(--color-surface)' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>Weitere Leistungen</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { href: '/getraenkeservice-schuetzenfest', label: 'Getränkeservice Schützenfest' },
                  { href: '/hochzeit-sauerland', label: 'Thekenservice Hochzeit' },
                  { href: '/eventservice-kreis-olpe', label: 'Eventservice Kreis Olpe' },
                  { href: '/', label: '← Startseite' },
                ].map(l => <a key={l.href} href={l.href} style={{ padding: '0.7rem 1.4rem', border: '1px solid rgba(200,164,78,0.2)', color: 'var(--color-text-muted)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em' }}>{l.label}</a>)}
              </div>
            </div>
          </section>

        </main>
      </RevealWrapper>
      <Footer />
    </>
  )
}
