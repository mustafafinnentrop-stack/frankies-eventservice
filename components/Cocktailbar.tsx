'use client'

import Image from 'next/image'
import BookingCTA from './BookingCTA'
import Icon from './Icon'
import { ContainerScroll, ContainerStagger, ContainerAnimated, ContainerInset } from './ScrollReveal'

const features = [
  { icon: 'van', title: 'Voll mobil', text: 'Wir kommen zu Ihrer Location' },
  { icon: 'bamboo', title: 'Bambustheke', text: 'Stilvolle Theke mit Urlaubsflair' },
  { icon: 'cocktail', title: 'Frische Cocktails', text: 'Klassiker & individuelle Kreationen' },
  { icon: 'pin', title: 'Überall einsetzbar', text: 'Garten, Wiese, Hof, Halle' },
]

export default function Cocktailbar() {
  return (
    <section id="cocktailbar">
      <ContainerScroll className="cb-scroll">
        <ContainerStagger className="section-container cb-intro">
          <ContainerAnimated animation="top">
            <p className="section-label">Unser Highlight</p>
          </ContainerAnimated>

          <ContainerAnimated animation="bottom">
            <h2 className="section-title" style={{ margin: '0 auto' }}>
              Mobile Cocktailbar —<br />mit echter Bambustheke
            </h2>
          </ContainerAnimated>

          <ContainerAnimated animation="blur">
            <p className="section-text" style={{ marginTop: '1.5rem' }}>
              Wir kommen mit unserer mobilen Cocktailbar und einer echten Bambustheke
              direkt zu Ihnen. Egal ob Geburtstag im Garten, Hochzeitsfeier unter freiem
              Himmel oder Firmen-Sommerfest — wir verwandeln jede Location in eine Bar.
            </p>
          </ContainerAnimated>

          <ContainerAnimated animation="blur" style={{ marginTop: '2rem' }}>
            <BookingCTA primary="Cocktailbar anfragen" pkg="Flat 50" />
          </ContainerAnimated>
        </ContainerStagger>

        {/* Kern der Vorlage: Das Bild geht beim Scrollen aus einer schmalen
            abgerundeten Form auf volle Breite auf. */}
        <ContainerInset className="cb-inset">
          <Image
            src="/cocktail.webp"
            alt="Frankies Eventservice – Mobile Cocktailbar mit Bambustheke für Events im Sauerland"
            width={1200}
            height={1500}
            priority
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </ContainerInset>
      </ContainerScroll>

      <div className="section-container">
        <h3 className="cb-sub">Was Sie erwartet</h3>
        <p className="section-text">
          Neben frisch zubereiteten Cocktails erwartet Sie ein professioneller
          Barkeeper-Service. Das einzigartige Ambiente unserer Bambustheke sorgt dafür,
          dass Ihre Gäste begeistert sind.
        </p>

        <div className="cocktail-features stagger-children reveal" style={{ justifyContent: 'center', marginTop: '3rem' }}>
          {features.map(f => (
            <div className="cocktail-feature" key={f.title} style={{ textAlign: 'left' }}>
              <span className="cocktail-feature-icon"><Icon name={f.icon} /></span>
              <div>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
