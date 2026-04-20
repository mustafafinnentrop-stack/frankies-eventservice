import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Getränkeservice Schützenfest Sauerland | Zapfservice & Thekenservice – Frankies',
  description: 'Professioneller Getränke- und Zapfservice für Schützenfeste im Kreis Olpe und Sauerland. Kompletter Thekenservice von Freitag bis Montag – zuverlässig und erfahren.',
  alternates: { canonical: 'https://frankies-eventservice.de/getraenkeservice-schuetzenfest' },
}

export default function GetraenkeserviceSchuetzenfest() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: 'var(--color-bg)', minHeight: '100vh' }}>

        <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
              Schützenfest im Sauerland
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Getränkeservice &amp;<br />Zapfservice für Ihr Schützenfest
            </h1>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Wir übernehmen den kompletten Thekenservice bei Ihrem Schützenfest — von Freitag bis Montag, professionell und zuverlässig. Im Kreis Olpe und dem gesamten Sauerland sind wir der richtige Ansprechpartner.
            </p>
            <a href="tel:+4915142840916" style={{ display: 'inline-block', background: 'var(--color-gold)', color: 'var(--color-bg)', padding: '1rem 2.5rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Jetzt anfragen
            </a>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: '1.5rem' }}>
            Professioneller Zapfservice für Schützenfeste
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
            Ein Schützenfest steht und fällt mit dem Thekenservice. Frankies Eventservice übernimmt den gesamten Getränkeausschank — vom Aufbau bis zum Abbau. Unser eingespieltes Team sorgt dafür, dass kein Glas leer bleibt.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            Wir sind vertraut mit dem Ablauf von Schützenfesten im Sauerland und wissen, worauf es ankommt: Pünktlichkeit, Verlässlichkeit und ein freundliches Team, das auch bei Hochbetrieb den Überblick behält.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { icon: '🍺', title: 'Zapfservice', text: 'Professioneller Fassbieranschluss & -ausschank' },
              { icon: '🏅', title: 'Erfahren', text: 'Vertraut mit Schützenfesten im Sauerland' },
              { icon: '📅', title: 'Ganzes Wochenende', text: 'Von Freitag bis Montag vor Ort' },
              { icon: '✓', title: 'Alles aus einer Hand', text: 'Aufbau, Service, Abbau' },
            ].map((item) => (
              <div key={item.title} style={{ padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.1)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{item.text}</span>
              </div>
            ))}
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

        <section style={{ padding: '3rem 2rem 5rem', background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Weitere Leistungen</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                { href: '/cocktailbar-lennestadt', label: 'Mobile Cocktailbar Lennestadt' },
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
