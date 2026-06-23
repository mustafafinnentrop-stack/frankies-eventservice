'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'

export default function ServiceContent() {
  const packages = [
    {
      title: 'Basic Party',
      description: 'Perfekt für kleinere Feiern und Privatveranstaltungen',
      items: [
        'Getränkeservice & Zapfanlage',
        'Stehtische & Eventmöbel',
        'Basis-Beleuchtung',
      ],
      price: 'ab 250 €',
    },
    {
      title: 'Kids & Fun',
      description: 'Ideal für Kindergeburtstage und Familienfeierlichkeiten',
      items: [
        'Hüpfburg oder Spielgeräte',
        'Slush-Eis oder Popcornmaschine',
        'Candy Bar Setup',
        'Musik & Ambiente-Beleuchtung',
      ],
      price: 'ab 400 €',
    },
    {
      title: 'Full Event',
      description: 'Das Komplettpaket für professionelle Events',
      items: [
        'Professionelles Servicepersonal',
        'Mobile Cocktailbar mit Bambus-Teke',
        'Hüpfburgen & Eventmöbel',
        'Fotobox & Foto-Mirror',
        'Profi-Licht- & Tontechnik',
        'DJ-Service & Showtechnik',
      ],
      price: 'ab 1.200 €',
    },
  ]

  const portfolioItems = [
    { category: 'Personalservice', description: 'Erfahrene Servicekräfte, Barkeeper und Event-Manager für professionelle Abläufe', icon: '👥' },
    { category: 'Getränkeservice', description: 'Bier vom Fass, Weine, Cocktails und alkoholfreie Getränke mit professioneller Zapfanlage', icon: '🍺' },
    { category: 'Mobile Cocktailbar', description: 'Elegante mobile Cocktailbar mit Bambus-Teke für gehobene Events', icon: '🍸' },
    { category: 'Hüpfburgen & Spielgeräte', description: 'Hochwertige Hüpfburgen und Spielgeräte für Kinder und Familien', icon: '🎪' },
    { category: 'Eventmöbel & Ausstattung', description: 'Stehtische, Bistrotische, Bestuhlung und stilvolle Raumausstattung', icon: '🪑' },
    { category: 'Fun-Food Module', description: 'Slush-Eis, Popcornmaschinen, Candy Bar und weitere kulinarische Highlights', icon: '🍿' },
    { category: 'Fotoboxen & Foto-Mirror', description: 'Moderne Fotoboxen und interaktive Foto-Mirror für unvergessliche Erinnerungen', icon: '📸' },
    { category: 'Licht- & Tontechnik', description: 'Professionelle Beleuchtung, DJ-Equipment, Showtechnik und Soundanlagen', icon: '🎤' },
  ]

  return (
    <>
      <Navbar />
      <RevealWrapper>
        <main style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
          {/* Hero Section */}
          <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)' }}>
            <div className="section-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
              <p className="section-label">Service & Portfolio</p>
              <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>Ihr Event aus einer Hand</h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Von professionellem Personal über Getränkeservice bis hin zu kompletten Event-Ausstattungen – Frankies Eventservice bietet alles, was Sie für eine unvergessliche Veranstaltung brauchen. Professionell, individuell, zuverlässig.
              </p>
            </div>
          </section>

          {/* Service Packages */}
          <section style={{ padding: '6rem 2rem' }}>
            <div className="section-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
                Unsere Service-Pakete
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '2.5rem', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(212, 175, 55, 0.15)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-gold)', fontFamily: 'var(--font-display)' }}>{pkg.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{pkg.description}</p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                      {pkg.items.map((item, i) => (
                        <li key={i} style={{ color: 'var(--color-text-muted)', marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--color-gold)' }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
                      <span style={{ fontSize: '1.3rem', color: 'var(--color-gold)', fontWeight: 'bold' }}>{pkg.price}</span>
                      <a
                        href="mailto:info@frankies-eventservice.de?subject=Anfrage%20Service-Paket"
                        style={{ padding: '0.75rem 1.5rem', background: 'var(--color-gold)', color: 'var(--color-bg)', textDecoration: 'none', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 'bold' }}
                      >
                        Anfragen
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Grid */}
          <section style={{ padding: '6rem 2rem', background: 'rgba(212, 175, 55, 0.03)' }}>
            <div className="section-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
                Unser Portfolio
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {portfolioItems.map((item, idx) => (
                  <div
                    key={idx}
                    style={{ background: 'var(--color-bg)', border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '12px', padding: '2rem', textAlign: 'center', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(212, 175, 55, 0.15)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-gold)', fontFamily: 'var(--font-display)' }}>{item.category}</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)' }}>
            <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>Individuelle Anfrage?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Alle Pakete sind individuell anpassbar. Kontaktieren Sie uns für ein persönliches Beratungsgespräch und ein maßgeschneidertes Angebot.
              </p>
              <a
                href="mailto:info@frankies-eventservice.de"
                style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--color-gold)', color: 'var(--color-bg)', textDecoration: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold' }}
              >
                Jetzt Anfrage stellen
              </a>
            </div>
          </section>
        </main>
      </RevealWrapper>
      <Footer />
    </>
  )
}
