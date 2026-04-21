import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Mobile Cocktailbar Lennestadt | Bulli-Bar & Bambustheke – Frankies Eventservice',
  description: 'Mobile Cocktailbar in Lennestadt und Kreis Olpe mieten. Mit Bulli-Bar und Bambustheke kommen wir direkt zu Ihnen – für Hochzeiten, Geburtstage, JGA und Firmenfeiern.',
  alternates: { canonical: 'https://frankies-eventservice.de/cocktailbar-lennestadt' },
}

const faq = [
  { q: 'Wie weit im Voraus sollte ich buchen?', a: 'Für Hochzeiten und größere Events empfehlen wir 3–6 Monate im Voraus. Für Geburtstage oder kleinere Feiern reichen oft 4–6 Wochen. Bei kurzfristigen Anfragen einfach anrufen.' },
  { q: 'Was kostet die mobile Cocktailbar?', a: 'Der Preis richtet sich nach Veranstaltungsdauer, Gästeanzahl und Wunschleistungen. Wir erstellen ein individuelles Angebot — das Erstgespräch ist kostenlos.' },
  { q: 'Welche Cocktails gibt es?', a: 'Klassiker wie Mojito, Aperol Spritz, Hugo und Caipirinha plus individuelle Kreationen. Alkoholfreie Alternativen sind selbstverständlich verfügbar.' },
  { q: 'Wie viel Platz braucht die Bambustheke?', a: 'Ca. 3×2 Meter plus Zugang für den Bulli. Wir klären das bei der Voranfrage — wir passen uns an Ihre Location an.' },
  { q: 'Bringt ihr auch Gläser und Zutaten mit?', a: 'Ja — Gläser, Shaker, Zutaten und alle nötigen Utensilien sind dabei. Sie müssen sich um nichts kümmern.' },
  { q: 'Kommt ihr auch bei Außen-Events?', a: 'Ja. Garten, Wiese, Hof, Festzelt — wir sind vollständig mobil. Bei extremem Wetter besprechen wir das vorab.' },
]

export default function CocktailbarLennestadt() {
  return (
    <>
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
                <BookingCTA primary="Termin &amp; Anfrage →" secondary="Kalender öffnen" />
              </div>
            </div>
          </section>

          {/* Image + Features */}
          <section style={{ padding: '6rem 2rem' }}>
            <div className="section-container">
              <div className="cocktail-grid">
                <div className="cocktail-visual reveal-left glow-frame">
                  <Image src="https://frankies-eventservice.de/wp-content/uploads/2026/03/preview-1.webp" alt="Mobile Cocktailbar mit Bulli und Bambustheke für Events in Lennestadt" width={600} height={750} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    <div className="cocktail-feature"><span className="cocktail-feature-icon">📍</span><div><strong>Mobiler Service</strong><span>Kreis Olpe &amp; Sauerland</span></div></div>
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <BookingCTA primary="Jetzt Termin anfragen →" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Booking Banner */}
          <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(200,164,78,0.07) 0%, var(--color-surface) 100%)', borderTop: '1px solid rgba(200,164,78,0.12)', borderBottom: '1px solid rgba(200,164,78,0.12)' }}>
            <div className="section-container reveal">
              <BookingCTA layout="banner" primary="Anfrage + Quiz" />
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
                <h2 className="section-title" style={{ margin: '0 auto' }}>So buchen Sie uns</h2>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                {[
                  { num: '01', title: 'Anfrage', text: 'Formular ausfüllen oder direkt anrufen.' },
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

          {/* CTA */}
          <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
            <div className="section-container reveal">
              <p className="section-label">Einsatzgebiet</p>
              <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Wir kommen zu Ihnen</h2>
              <p className="section-text" style={{ margin: '0 auto 2.5rem' }}>
                Lennestadt · Finnentrop · Kirchhundem · Attendorn · Olpe · Drolshagen · Wenden · Schmallenberg
              </p>
              <BookingCTA primary="Termin anfragen" secondary="0151 42840916" calcomUrl="tel:+4915142840916" />
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
