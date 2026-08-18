import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import EventStrip from '@/components/EventStrip'
import Leistungen from '@/components/Leistungen'
import Cocktailbar from '@/components/Cocktailbar'
import Ueber from '@/components/Ueber'
import Ablauf from '@/components/Ablauf'
import Region from '@/components/Region'
import Referenzen from '@/components/Referenzen'
import Kontakt from '@/components/Kontakt'
import Testimonials from '@/components/Testimonials'
import RevealWrapper from '@/components/RevealWrapper'
import ClientEffects from '@/components/ClientEffects'
import { CinematicFooter } from '@/components/ui/motion-footer'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Der Footer liegt fixiert unter dem Inhalt und wird beim Scrollen
          freigelegt. Der Inhalt braucht dafuer eine hoehere Ebene, aber
          keinen deckenden Hintergrund — den Footer schneidet sein eigener
          clip-path-Wrapper bis zum Seitenende ohnehin weg. Die frueher hier
          gesetzte Deckfarbe hat nur das Hintergrundfoto verdeckt.
          Siehe .content-layer in globals.css. */}
      <div className="content-layer">
        <RevealWrapper>
          {/* Der Hero traegt sein Foto selbst als Hintergrund. Vorher lagen
              hier zwei fixierte, formatfuellende Ebenen in einem
              clip-path-Wrapper, die GSAP pro Bild verschoben hat. Gemessen
              gingen 4,4 von 5,9 Sekunden Scrollzeit in (program), also ins
              Malen und Kompositieren — genau das verursacht ein fixiertes
              Vollbild, das sich jedes Bild bewegt. */}
          <Hero />

          {/* Alles unterhalb des Hero bekommt einen deckenden Hintergrund und
              schiebt sich beim Scrollen ueber das fixierte Hintergrundfoto.
              Dadurch ist das Foto nur hinter dem Hero zu sehen und wird
              danach zugedeckt — derselbe Vorhang-Gedanke wie beim Footer,
              nur andersherum. Siehe .below-hero in globals.css. */}
          <div className="below-hero">
            <EventStrip />
            <Leistungen />
            <Cocktailbar />
            <Ueber />
            <Ablauf />
            <Region />
            <Referenzen />
            <Testimonials />
            <Kontakt />
          </div>
        </RevealWrapper>
      </div>
      <CinematicFooter />
      <ClientEffects />
    </>
  )
}
