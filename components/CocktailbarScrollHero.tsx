'use client'

import { useEffect, useState } from 'react'
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero'
import BookingCTA from '@/components/BookingCTA'

/*
  Hero der Cocktailbar-Seite auf Basis der gelieferten Vorlage
  scroll-expansion-hero. Die Vorlage selbst liegt unter components/ui/;
  hier stehen nur die Inhalte.

  Zwei Videofassungen, weil der Medienrahmen der Vorlage die Form
  wechselt: auf dem Desktop ist er quer (1368x765), auf dem Handy
  hochkant (371x600). Eine einzige Fassung waere auf einer der beiden
  Seiten stark beschnitten — hochkant im Querrahmen zeigte gerechnet nur
  31% der Bildhoehe.

    quer     1920x1080, 2,2 MB — Ausschnitt aus dem Original bei 45%
                                 Hoehe: Bambustheke oben, Logo und
                                 Cocktails darunter
    hochkant 1080x1920, 2,3 MB — das Original in voller Hoehe

  Ausgewaehlt wird ueber dieselbe Grenze wie im Rahmen der Vorlage
  (768px). Die Auswahl laeuft im Effekt, nicht beim Rendern auf dem
  Server: dort ist die Bildschirmbreite unbekannt. Voreinstellung ist
  deshalb die Handy-Fassung — die Mehrheit der Besucher kommt mobil, und
  auf dem Desktop wird sofort nach dem Laden umgeschaltet.
*/
const QUER = { video: '/cocktailbar-quer.mp4', bild: '/cocktailbar-quer-poster.webp' }
const HOCH = { video: '/cocktailbar-web.mp4', bild: '/cocktailbar-poster.webp' }

export default function CocktailbarScrollHero() {
  const [medium, setMedium] = useState(HOCH)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const setzen = () => setMedium(mq.matches ? QUER : HOCH)
    setzen()
    mq.addEventListener('change', setzen)
    return () => mq.removeEventListener('change', setzen)
  }, [])

  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc={medium.video}
      posterSrc={medium.bild}
      bgImageSrc="/bambustheke.webp"
      title="Mobile Cocktailbar"
      date="Lennestadt & Kreis Olpe"
      scrollToExpand="Scrollen zum Öffnen"
    >
      <div className="section-container" style={{ maxWidth: '760px', textAlign: 'center' }}>
        {/* Die h1 der Seite. Die Titel der Vorlage sind h2 und fahren beim
            Aufziehen aus dem Bild — auf dem Handy sind sie von Anfang an
            draussen. Ohne diese Zeile hatte die Seite keine h1 mehr. */}
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4.4vw,3.4rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--color-text)', marginBottom: '1.25rem' }}>
          Mobile Cocktailbar<br />in Lennestadt mieten
        </h1>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          Unsere mobile Cocktailbar kommt mit der Bambustheke direkt zu Ihnen —
          egal ob Garten, Hof, Halle oder Festzelt.
        </p>
        <BookingCTA primary="Angebot anfordern" secondary="Jetzt anrufen" calcomUrl="tel:+4915142840916" />
      </div>
    </ScrollExpandMedia>
  )
}
