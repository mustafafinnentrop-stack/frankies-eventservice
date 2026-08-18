'use client'

import Image from 'next/image'
import BookingCTA from './BookingCTA'
import { ORTE } from './cocktailbar-daten'
import { ContainerScroll, ContainerStagger, ContainerAnimated, ContainerInset } from './ScrollReveal'


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
            src="/theke-vor-ort.webp"
            alt="Frankies Eventservice – Mobile Cocktailbar mit Bambustheke, aufgebaut unter Pavillon bei einem Event im Sauerland"
            width={1100}
            height={1467}
            priority
            /* sizes stand auf 100vw, obwohl der Rahmen dank der 2rem
               Seitenabstaende schmaler ist. Dadurch hat der Browser die
               groesste srcset-Variante angefordert. Der gemessene Rahmen ist
               1312px bei 1440px Fenster, mobil volle Breite. */
            sizes="(max-width: 768px) 100vw, 1350px"
            quality={60}
            /* Das Foto ist hochkant, der Ausschnitt hier breit — ohne
               objectPosition schneidet cover mittig und zeigt die Hecke statt
               der Theke. Der Wert haelt die Bambustheke mit dem Banner im
               Bild, auf Desktop wie auf Handy nachgemessen. */
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 68%', display: 'block' }}
          />
        </ContainerInset>
      </ContainerScroll>

      {/* Entwurf A — Orte statt Behauptungen. Vorher standen hier vier
          Icon-Kaesten ("Voll mobil — Wir kommen zu Ihrer Location",
          "Ueberall einsetzbar — Garten, Wiese, Hof, Halle"): Behauptungen
          ohne Beleg. Jetzt drei Fotos derselben Theke an drei benannten
          Orten. Wer das sieht, braucht kein Icon, das ihm "mobil" sagt. */}
      <div className="section-container">
        <p className="cb-orte-intro reveal">
          Dieselbe Theke — überall aufgebaut, wo gefeiert wird.
        </p>
        <ul className="cb-orte stagger-children reveal">
          {ORTE.map((o) => (
            <li key={o.ort} className="reveal">
              <div className="cb-ort-bild">
                <Image src={o.bild} alt={o.alt} width={800} height={1000}
                       sizes="(max-width: 900px) 90vw, 400px" quality={62}
                       style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: o.pos }} />
              </div>
              <h3>{o.ort}</h3>
              <p>{o.zusatz}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
