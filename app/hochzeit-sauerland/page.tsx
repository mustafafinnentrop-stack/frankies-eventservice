import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Thekenservice Hochzeit Sauerland | Getränkeservice für Hochzeiten – Frankies Eventservice',
  description: 'Professioneller Thekenservice für Hochzeiten im Sauerland und Kreis Olpe. Wir übernehmen den kompletten Getränkeausschank – damit Sie entspannt feiern können.',
  alternates: { canonical: 'https://frankies-eventservice.de/hochzeit-sauerland' },
}

export default function HochzeitSauerland() {
  return (
    <>
      <Navbar />
      <RevealWrapper>
        <main style={{ paddingTop: '100px', background: 'var(--color-bg)' }}>

          <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-surface)' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label reveal">Hochzeit im Sauerland</p>
              <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Getränkeservice für<br />Ihre Hochzeit
              </h1>
              <p className="reveal" style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                Ihr Hochzeitstag soll unvergesslich sein. Deshalb übernehmen wir den gesamten Getränkeausschank — so können Sie entspannt mit Ihren Gästen feiern, ohne sich um die Theke kümmern zu müssen.
              </p>
              <div className="reveal">
                <BookingCTA primary="Unverbindlich anfragen →" secondary="Jetzt anrufen" calcomUrl="tel:+4915142840916" />
              </div>
            </div>
          </section>

          <section id="details" style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="cocktail-grid">
                <div className="reveal">
                  <p className="section-label">Ihr Tag, unser Service</p>
                  <h2 className="section-title">Thekenservice &amp;<br />Cocktailbar für Hochzeiten</h2>
                  <p className="section-text">
                    Frankies Eventservice ist Ihr zuverlässiger Partner für Hochzeiten im Kreis Olpe und dem Sauerland. Wir bieten sowohl klassischen Thekenservice als auch unsere mobile Cocktailbar mit Bulli und Bambustheke — je nach Ihren Wünschen.
                  </p>
                  <p className="section-text" style={{ marginTop: '1rem' }}>
                    Von der Sektempfang-Begleitung über den Abendausschank bis zum Late-Night-Cocktailservice — wir sind von Anfang bis Ende für Sie da. Gerne stimmen wir das Angebot individuell auf Ihre Hochzeitsfeier ab.
                  </p>
                  <div className="cocktail-features stagger-children reveal" style={{ marginTop: '2rem' }}>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">🥂</span>
                      <div>
                        <strong>Sektempfang</strong>
                        <span>Stilvoller Start in Ihren Tag</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">🍹</span>
                      <div>
                        <strong>Cocktailbar</strong>
                        <span>Mobile Bar mit Bambustheke</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">🍺</span>
                      <div>
                        <strong>Ausschank</strong>
                        <span>Bier, Wein, Softdrinks &amp; mehr</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">💛</span>
                      <div>
                        <strong>Persönlich</strong>
                        <span>Individuell auf Sie abgestimmt</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cocktail-visual reveal-right glow-frame">
                  <Image
                    src="https://frankies-eventservice.de/wp-content/uploads/2026/03/preview-1.webp"
                    alt="Thekenservice und Cocktailbar für Hochzeiten im Sauerland"
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
                <p className="section-label">Ihr Hochzeitstag</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Von morgens bis spät in die Nacht</h2>
                <p className="section-text" style={{ margin: '0 auto' }}>
                  Wir begleiten Sie durch den gesamten Tag — mit dem passenden Service zur jeweiligen Phase.
                </p>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                {[
                  { time: 'Nachmittags', title: 'Sektempfang', text: 'Nach der Trauung begrüßen wir Ihre Gäste mit Sekt, Aperol oder alkoholfreien Alternativen.' },
                  { time: 'Abends', title: 'Dinner-Service', text: 'Während des Essens sorgen wir für die passenden Getränke an den Tischen.' },
                  { time: 'Feier', title: 'Bar & Theke', text: 'Auf der Tanzfläche sorgt unsere Theke für Nachschub — schnell und freundlich.' },
                  { time: 'Late Night', title: 'Cocktailbar', text: 'Der Höhepunkt: Unsere Bambustheke öffnet, Barkeeper mixen frische Cocktails bis in die Nacht.' },
                ].map(phase => (
                  <div key={phase.title} style={{ background: 'var(--color-surface-2)', border: '1px solid rgba(200,164,78,0.12)', padding: '2rem' }}>
                    <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{phase.time}</p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}>{phase.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: phase.text }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="section-label">Darum Frankies</p>
                <h2 className="section-title" style={{ margin: '0 auto' }}>Warum Brautpaare uns wählen</h2>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                {[
                  { icon: '✓', title: 'Alles aus einer Hand', text: 'Von Sektempfang bis Late-Night — ein Ansprechpartner.' },
                  { icon: '⚡', title: 'Schneller Service', text: 'Kein Warten an der Theke — Ihre Gäste werden zügig bedient.' },
                  { icon: '🤝', title: 'Erfahren', text: 'Wir kennen den Ablauf einer Hochzeit und passen uns an.' },
                  { icon: '💬', title: 'Persönlich', text: 'Kennenlerngespräch &amp; individuelle Abstimmung vorab.' },
                ].map(item => (
                  <div key={item.title} style={{ background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.1)', padding: '2rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>{item.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)', textAlign: 'center' }}>
            <div className="section-container reveal">
              <p className="section-label">Jetzt anfragen</p>
              <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Bereit für Ihren großen Tag?</h2>
              <p className="section-text" style={{ margin: '0 auto 2.5rem' }}>
                Lassen Sie uns über Ihre Hochzeit sprechen. Wir melden uns innerhalb von 24 Stunden zurück.
              </p>
              <BookingCTA primary="Jetzt anrufen →" secondary="E-Mail schreiben" calcomUrl="tel:+4915142840916" />
            </div>
          </section>

          <section style={{ padding: '4rem 2rem' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>Weitere Leistungen</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { href: '/cocktailbar-lennestadt', label: 'Mobile Cocktailbar' },
                  { href: '/getraenkeservice-schuetzenfest', label: 'Getränkeservice Schützenfest' },
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
