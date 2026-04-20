import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'

export const metadata: Metadata = {
  title: 'Mobile Cocktailbar Lennestadt | Bulli-Bar & Bambustheke – Frankies Eventservice',
  description: 'Mobile Cocktailbar in Lennestadt und Kreis Olpe mieten. Mit Bulli-Bar und Bambustheke kommen wir direkt zu Ihnen – für Hochzeiten, Geburtstage, JGA und Firmenfeiern.',
  alternates: { canonical: 'https://frankies-eventservice.de/cocktailbar-lennestadt' },
}

export default function CocktailbarLennestadt() {
  return (
    <>
      <Navbar />
      <RevealWrapper>
        <main style={{ paddingTop: '100px', background: 'var(--color-bg)' }}>

          <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-surface)' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label reveal">Lennestadt &amp; Kreis Olpe</p>
              <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Mobile Cocktailbar<br />in Lennestadt mieten
              </h1>
              <p className="reveal" style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                Unsere mobile Cocktailbar kommt mit Bulli und Bambustheke direkt zu Ihnen — egal ob Garten, Hof, Halle oder Festzelt. Im Kreis Olpe und Sauerland sind wir Ihr Partner für stimmungsvolle Events.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:+4915142840916" className="btn-primary">Jetzt anrufen</a>
                <a href="#details" className="btn-secondary">Mehr erfahren</a>
              </div>
            </div>
          </section>

          <section id="details" style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="cocktail-grid">
                <div className="cocktail-visual reveal-left glow-frame">
                  <Image
                    src="https://frankies-eventservice.de/wp-content/uploads/2026/03/preview-1.webp"
                    alt="Mobile Cocktailbar mit Bulli und Bambustheke für Events in Lennestadt"
                    width={600}
                    height={750}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="reveal">
                  <p className="section-label">Einzigartiges Flair</p>
                  <h2 className="section-title">Cocktailbar mieten<br />im Kreis Olpe</h2>
                  <p className="section-text">
                    Frankies Eventservice bietet Ihnen eine vollständige mobile Cocktailbar für alle Veranstaltungen in Lennestadt, Finnentrop, Kirchhundem, Attendorn und dem gesamten Kreis Olpe. Unser VW-Bulli mit integrierter Bar ist der Blickfang auf jedem Event.
                  </p>
                  <p className="section-text" style={{ marginTop: '1rem' }}>
                    Die stylische Bambustheke sorgt für ein einzigartiges Ambiente — ob Hochzeitsfeier, JGA, Geburtstag oder Firmenfeier. Unsere erfahrenen Barkeeper bereiten frische Cocktailkreationen direkt an Ihrem Veranstaltungsort zu.
                  </p>
                  <div className="cocktail-features stagger-children reveal" style={{ marginTop: '2rem' }}>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">🚐</span>
                      <div>
                        <strong>Bulli-Bar</strong>
                        <span>VW-Bulli als mobiler Blickfang</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">🎋</span>
                      <div>
                        <strong>Bambustheke</strong>
                        <span>Stilvolle Theke mit Urlaubsflair</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">🍸</span>
                      <div>
                        <strong>Frische Cocktails</strong>
                        <span>Klassiker &amp; Kreationen</span>
                      </div>
                    </div>
                    <div className="cocktail-feature">
                      <span className="cocktail-feature-icon">📍</span>
                      <div>
                        <strong>Wir kommen zu Ihnen</strong>
                        <span>Kreis Olpe &amp; Sauerland</span>
                      </div>
                    </div>
                  </div>
                  <a href="tel:+4915142840916" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                    0151 42840916
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p className="section-label">Für jeden Anlass</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Ideal für Ihre Feier</h2>
                <p className="section-text" style={{ margin: '0 auto' }}>
                  Unsere mobile Cocktailbar passt zu jeder Art von Veranstaltung im Sauerland.
                </p>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {[
                  { icon: '💍', title: 'Hochzeiten', text: 'Stilvoller Sektempfang oder Late-Night-Cocktailservice für Braut und Gäste.' },
                  { icon: '🎉', title: 'Junggesellenabschied', text: 'Unvergesslicher JGA mit frischen Cocktails und Urlaubsflair.' },
                  { icon: '🎂', title: 'Geburtstage', text: 'Runder Geburtstag oder Gartenparty — wir machen daraus ein Highlight.' },
                  { icon: '🏢', title: 'Firmenfeiern', text: 'Sommerfest, Jubiläum oder Weihnachtsfeier mit professionellem Service.' },
                  { icon: '🎯', title: 'Schützenfeste', text: 'Abwechslung zum klassischen Bier-Ausschank für besondere Momente.' },
                  { icon: '🎪', title: 'Dorf- &amp; Vereinsfeste', text: 'Kompletter Thekenservice mit zusätzlichem Cocktail-Highlight.' },
                ].map(item => (
                  <div key={item.title} style={{ background: 'var(--color-surface-2)', border: '1px solid rgba(200,164,78,0.1)', padding: '2rem', transition: 'all 0.3s ease' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="section-label">In 4 Schritten</p>
                <h2 className="section-title" style={{ margin: '0 auto' }}>So buchen Sie uns</h2>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                {[
                  { num: '01', title: 'Anfrage', text: 'Sie kontaktieren uns mit Datum, Ort und Anzahl der Gäste.' },
                  { num: '02', title: 'Angebot', text: 'Wir erstellen ein individuelles Angebot mit Cocktailkarte.' },
                  { num: '03', title: 'Aufbau', text: 'Bulli rollt an, Bambustheke wird aufgebaut, alles startklar.' },
                  { num: '04', title: 'Genießen', text: 'Profi-Barkeeper zaubern frische Cocktails für Ihre Gäste.' },
                ].map(step => (
                  <div key={step.num} style={{ padding: '1.5rem 0', borderTop: '1px solid rgba(200,164,78,0.2)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--color-gold)', marginBottom: '0.5rem', lineHeight: 1 }}>{step.num}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 400, marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, fontWeight: 300 }}>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)', textAlign: 'center' }}>
            <div className="section-container reveal">
              <p className="section-label">Einsatzgebiet</p>
              <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Wir kommen zu Ihnen</h2>
              <p className="section-text" style={{ margin: '0 auto 2.5rem' }}>
                Lennestadt · Finnentrop · Kirchhundem · Attendorn · Olpe · Drolshagen · Wenden · Schmallenberg · und weitere Orte im Sauerland
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:+4915142840916" className="btn-primary">0151 42840916</a>
                <a href="mailto:info@frankies-eventservice.de" className="btn-secondary">E-Mail schreiben</a>
              </div>
            </div>
          </section>

          <section style={{ padding: '4rem 2rem' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>Weitere Leistungen</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { href: '/getraenkeservice-schuetzenfest', label: 'Getränkeservice Schützenfest' },
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
