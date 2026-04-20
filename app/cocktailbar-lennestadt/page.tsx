import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mobile Cocktailbar Lennestadt | Bulli-Bar & Bambustheke – Frankies Eventservice',
  description: 'Mobile Cocktailbar in Lennestadt und Kreis Olpe mieten. Mit Bulli-Bar und Bambustheke kommen wir direkt zu Ihnen – für Hochzeiten, Geburtstage, JGA und Firmenfeiern.',
  alternates: { canonical: 'https://frankies-eventservice.de/cocktailbar-lennestadt' },
}

export default function CocktailbarLennestadt() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: 'var(--color-bg)', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
              Lennestadt &amp; Kreis Olpe
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Mobile Cocktailbar<br />in Lennestadt mieten
            </h1>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Unsere mobile Cocktailbar kommt mit Bulli und Bambustheke direkt zu Ihnen — egal ob Garten, Hof, Halle oder Festzelt. Im Kreis Olpe und Sauerland sind wir Ihr Partner für stimmungsvolle Events.
            </p>
            <a href="tel:+4915142840916" style={{ display: 'inline-block', background: 'var(--color-gold)', color: 'var(--color-bg)', padding: '1rem 2.5rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Jetzt anfragen
            </a>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: '1.5rem' }}>
            Cocktailbar mieten im Kreis Olpe
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
            Frankies Eventservice bietet Ihnen eine vollständige mobile Cocktailbar für alle Veranstaltungsarten in Lennestadt, Finnentrop, Kirchhundem, Attendorn und dem gesamten Kreis Olpe. Unser VW-Bulli mit integrierter Bar ist der Blickfang auf jedem Event.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            Die stylische Bambustheke sorgt für ein einzigartiges Ambiente — ob Hochzeitsfeier, JGA, Geburtstag oder Firmenfeier. Unsere erfahrenen Barkeeper bereiten frische Cocktailkreationen direkt an Ihrem Veranstaltungsort zu.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { icon: '🚐', title: 'Bulli-Bar', text: 'Unser VW-Bulli als mobiler Blickfang' },
              { icon: '🎋', title: 'Bambustheke', text: 'Stilvolle Theke mit Urlaubsflair' },
              { icon: '🍸', title: 'Frische Cocktails', text: 'Klassiker & Kreationen nach Wunsch' },
              { icon: '📍', title: 'Wir kommen zu Ihnen', text: 'Kreis Olpe & Sauerland' },
            ].map((item) => (
              <div key={item.title} style={{ padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.1)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{item.text}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>
            Für welche Anlässe?
          </h2>
          <ul style={{ color: 'var(--color-text-muted)', lineHeight: 2, fontWeight: 300, paddingLeft: '1.25rem', marginBottom: '2.5rem' }}>
            {['Hochzeiten &amp; Hochzeitsfeiern', 'Junggesellenabschied (JGA)', 'Geburtstagsfeiern', 'Firmenfeiern &amp; Sommerfeste', 'Schützenfeste', 'Dorffeste &amp; Vereinsfeste'].map(item => (
              <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>

          <div style={{ padding: '2rem', background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.15)', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Einsatzgebiet</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
              Lennestadt · Finnentrop · Kirchhundem · Attendorn · Olpe · Drolshagen · Wenden · Schmallenberg · und weitere Orte im Sauerland
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+4915142840916" style={{ display: 'inline-block', background: 'var(--color-gold)', color: 'var(--color-bg)', padding: '1rem 2rem', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              0151 42840916
            </a>
            <a href="/" style={{ display: 'inline-block', border: '1px solid rgba(200,164,78,0.3)', color: 'var(--color-text)', padding: '1rem 2rem', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              ← Zur Startseite
            </a>
          </div>
        </section>

        {/* Internal links */}
        <section style={{ padding: '3rem 2rem 5rem', background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Weitere Leistungen</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                { href: '/getraenkeservice-schuetzenfest', label: 'Getränkeservice Schützenfest' },
                { href: '/hochzeit-sauerland', label: 'Thekenservice Hochzeit' },
                { href: '/eventservice-kreis-olpe', label: 'Eventservice Kreis Olpe' },
              ].map(link => (
                <a key={link.href} href={link.href} style={{ padding: '0.6rem 1.25rem', border: '1px solid rgba(200,164,78,0.2)', color: 'var(--color-text-muted)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em' }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
