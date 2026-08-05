'use client'

import Image from 'next/image'
import BookingCTA from './BookingCTA'
import Icon from './Icon'

export default function Cocktailbar() {
  return (
    <section id="cocktailbar">
      <div className="section-container">
        <div className="reveal grid-text">
          <p className="section-label">Unser Highlight</p>
          <h2 className="section-title">Mobile Cocktailbar —<br />mit echter Bambustheke</h2>
          
          <div className="cocktail-visual glow-frame" style={{ maxWidth: '600px', margin: '0 auto 3rem', aspectRatio: '4/5' }}>
            <Image
              src="/cocktail.webp"
              alt="Frankies Eventservice – Mobile Cocktailbar mit Bambustheke für Events im Sauerland"
              width={600}
              height={750}
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <p className="section-text">
            Wir kommen mit unserer mobilen Cocktailbar und einer echten Bambustheke
            direkt zu Ihnen. Egal ob Geburtstag im Garten, Hochzeitsfeier unter freiem
            Himmel oder Firmen-Sommerfest — unsere mobile Cocktailbar verwandelt
            jede Location in eine Bar.
          </p>
          
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginTop: '2rem', marginBottom: '0.75rem' }}>
            Was Sie erwartet
          </h3>
          <p className="section-text">
            Neben frisch zubereiteten Cocktails erwartet Sie außerdem ein professioneller
            Barkeeper-Service. Zusätzlich sorgt das einzigartige Ambiente unserer
            Bambustheke dafür, dass Ihre Gäste begeistert sind.
          </p>

          <div className="cocktail-features stagger-children reveal" style={{ justifyContent: 'center', marginTop: '3rem' }}>
            <div className="cocktail-feature" style={{ textAlign: 'left' }}>
              <span className="cocktail-feature-icon"><Icon name="van" /></span>
              <div>
                <strong>Voll mobil</strong>
                <span>Wir kommen zu Ihrer Location</span>
              </div>
            </div>
            <div className="cocktail-feature" style={{ textAlign: 'left' }}>
              <span className="cocktail-feature-icon"><Icon name="bamboo" /></span>
              <div>
                <strong>Bambustheke</strong>
                <span>Stilvolle Theke mit Urlaubsflair</span>
              </div>
            </div>
            <div className="cocktail-feature" style={{ textAlign: 'left' }}>
              <span className="cocktail-feature-icon"><Icon name="cocktail" /></span>
              <div>
                <strong>Frische Cocktails</strong>
                <span>Klassiker &amp; individuelle Kreationen</span>
              </div>
            </div>
            <div className="cocktail-feature" style={{ textAlign: 'left' }}>
              <span className="cocktail-feature-icon"><Icon name="pin" /></span>
              <div>
                <strong>Überall einsetzbar</strong>
                <span>Garten, Wiese, Hof, Halle — wir kommen zu Ihnen</span>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
            <BookingCTA primary="Cocktailbar anfragen" pkg="Flat 50" />
          </div>
        </div>
      </div>
    </section>
  )
}
