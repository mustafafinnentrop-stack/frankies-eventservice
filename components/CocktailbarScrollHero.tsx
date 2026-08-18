'use client'

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero'
import BookingCTA from '@/components/BookingCTA'

/*
  Hero der Cocktailbar-Seite auf Basis der gelieferten Vorlage
  scroll-expansion-hero. Die Vorlage selbst liegt unveraendert unter
  components/ui/; hier stehen nur die Inhalte.

  Das Video ist die vom Betreiber hochgeladene Aufnahme, fuer das Web
  umgerechnet: 2160x3840 und 19 MB im Original, jetzt 1080x1920 und
  2,3 MB (H.264, CRF 28, ohne Tonspur, faststart). Das Standbild ist ein
  Einzelbild aus Sekunde 4 und wird angezeigt, bis das Video laeuft.

  Wichtig: Die Vorlage faengt wheel und touchmove ab und haelt die Seite
  bei scrollY 0 fest, bis das Medium aufgezogen ist. Das vertraegt sich
  nicht mit Lenis. Lenis laeuft ueber HeroParallax nur auf der Startseite,
  hier nicht — geprueft.
*/
export default function CocktailbarScrollHero() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/cocktailbar-web.mp4"
      posterSrc="/cocktailbar-poster.webp"
      bgImageSrc="/bambustheke.webp"
      title="Mobile Cocktailbar"
      date="Lennestadt & Kreis Olpe"
      scrollToExpand="Scrollen zum Öffnen"
    >
      <div className="section-container" style={{ maxWidth: '760px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          Unsere mobile Cocktailbar kommt mit der Bambustheke direkt zu Ihnen —
          egal ob Garten, Hof, Halle oder Festzelt.
        </p>
        <BookingCTA primary="Angebot anfordern" secondary="Jetzt anrufen" calcomUrl="tel:+4915142840916" />
      </div>
    </ScrollExpandMedia>
  )
}
