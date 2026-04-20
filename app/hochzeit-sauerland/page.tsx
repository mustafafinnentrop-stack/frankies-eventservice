import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Thekenservice Hochzeit Sauerland | Getränkeservice für Hochzeiten – Frankies Eventservice',
  description: 'Professioneller Thekenservice für Hochzeiten im Sauerland und Kreis Olpe. Wir übernehmen den kompletten Getränkeausschank – damit Sie entspannt feiern können.',
  alternates: { canonical: 'https://frankies-eventservice.de/hochzeit-sauerland' },
}

export default function HochzeitSauerland() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: 'var(--color-bg)', minHeight: '100vh' }}>

        <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
              Hochzeit im Sauerland
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Getränkeservice für<br />Ihre Hochzeit
            </h1>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Ihr Hochzeitstag soll unvergesslich sein. Deshalb übernehmen wir den gesamten Getränkeausschank — so können Sie entspannt mit Ihren Gästen feiern, ohne sich um die Theke kümmern zu müssen.
            </p>
            <a href="tel:+4915142840916" style={{ display: 'inline-block', background: 'var(--color-gold)', color: 'var(--color-bg)', padding: '1rem 2.5rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Jetzt anfragen
            </a>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: '1.5rem' }}>
            Thekenservice &amp; Cocktailbar für Hochzeiten
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
            Frankies Eventservice ist Ihr zuverlässiger Partner für Hochzeiten im Kreis Olpe und dem Sauerland. Wir bieten sowohl klassischen Thekenservice als auch unsere mobile Cocktailbar mit Bulli und Bambustheke — je nach Ihren Wünschen.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            Von der Sektempfang-Begleitung über den Abendausschank bis zum Late-Night-Cocktailservice — wir sind von Anfang bis Ende für Sie da. Gerne stimmen wir das Angebot individuell auf Ihre Hochzeitsfeier ab.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { icon: '🥂', title: 'Sektempfang', text: 'Stilvoller Start in Ihren besonderen Tag' },
              { icon: '🍹', title: 'Cocktailbar', text: 'Mobile Cocktailbar mit Bambustheke' },
              { icon: '🍺', title: 'Ausschank', text: 'Bier, Wein, Softdrinks & mehr' },
              { icon: '💛', title: 'Persönlich', text: 'Individuell auf Ihre Hochzeit abgestimmt' },
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
                { href: '/getraenkeservice-schuetzenfest', label: 'Getränkeservice Schützenfest' },
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
