'use client'

import Image from 'next/image'

export default function Cocktailbar() {
  return (
    <section id="cocktailbar">
      <div className="section-container">
        <div className="cocktail-grid">
          <div className="cocktail-visual reveal-left glow-frame">
            <Image
              src="https://frankies-eventservice.de/wp-content/uploads/2026/03/preview-1.webp"
              alt="Frankies Eventservice – Mobile Cocktailbar mit Bambustheke für Events im Sauerland"
              width={600}
              height={750}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="reveal">
            <p className="section-label">Unser Highlight</p>
            <h2 className="section-title">Mobile Cocktailbar —<br />Bulli &amp; Bambustheke</h2>
            <p className="section-text">
              Wir kommen mit unserem Bulli und einer echten Bambustheke direkt
              zu Ihnen. Egal ob Geburtstag im Garten, Hochzeitsfeier unter freiem
              Himmel oder Firmen-Sommerfest — unsere mobile Cocktailbar verwandelt
              jede Location in eine Bar.
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              Was Sie erwartet
            </h3>
            <p className="section-text">
              Neben frisch zubereiteten Cocktails erwartet Sie außerdem ein professioneller
              Barkeeper-Service. Zusätzlich sorgt das einzigartige Ambiente unserer
              Bambustheke dafür, dass Ihre Gäste begeistert sind.
            </p>
            <div className="cocktail-features stagger-children reveal">
              <div className="cocktail-feature">
                <span className="cocktail-feature-icon">🚐</span>
                <div>
                  <strong>Bulli-Bar</strong>
                  <span>Unser Bulli als mobiler Blickfang</span>
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
                  <span>Klassiker &amp; individuelle Kreationen</span>
                </div>
              </div>
              <div className="cocktail-feature">
                <span className="cocktail-feature-icon">📍</span>
                <div>
                  <strong>Überall einsetzbar</strong>
                  <span>Garten, Wiese, Hof, Halle — wir kommen zu Ihnen</span>
                </div>
              </div>
            </div>
            <a
              href="#kontakt"
              className="btn-primary"
              style={{ marginTop: '2rem', display: 'inline-block' }}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Cocktailbar anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
