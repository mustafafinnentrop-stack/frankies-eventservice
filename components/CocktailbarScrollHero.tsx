'use client'

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero'
import BookingCTA from '@/components/BookingCTA'

/*
  Hero der Cocktailbar-Seite auf Basis der gelieferten Vorlage
  scroll-expansion-hero. Die Vorlage selbst liegt unveraendert unter
  components/ui/; hier stehen nur die Inhalte.

  Solange kein Video vorliegt, laeuft die Bildfassung der Vorlage
  (mediaType="image"). Sobald das Video da ist, wird daraus:
      mediaType="video"
      mediaSrc="/cocktailbar.mp4"
      posterSrc="/theke-vor-ort.webp"
  Mehr ist nicht zu aendern, die Vorlage kann beides.

  Wichtig: Die Vorlage faengt wheel und touchmove ab und haelt die Seite
  bei scrollY 0 fest, bis das Medium aufgezogen ist. Das vertraegt sich
  nicht mit Lenis. Lenis laeuft ueber HeroParallax nur auf der Startseite,
  hier nicht — geprueft.
*/
export default function CocktailbarScrollHero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="/theke-vor-ort.webp"
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
