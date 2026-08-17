import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import EventStrip from '@/components/EventStrip'
import Leistungen from '@/components/Leistungen'
import Cocktailbar from '@/components/Cocktailbar'
import Ueber from '@/components/Ueber'
import Ablauf from '@/components/Ablauf'
import Region from '@/components/Region'
import Kontakt from '@/components/Kontakt'
import Testimonials from '@/components/Testimonials'
import RevealWrapper from '@/components/RevealWrapper'
import ClientEffects from '@/components/ClientEffects'
import { CinematicFooter } from '@/components/ui/motion-footer'
import { HeroParallax } from '@/components/ui/parallax-scrolling'

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
          {/* Gleiche Technik wie der Footer: clip-path begrenzt die
              fixierte Foto-Ebene auf diese Box. Beim Footer legt das frei,
              hier schneidet es weg — das Bild bleibt stehen und
              verschwindet, sobald der Hero den Bildschirm verlaesst. */}
          <div className="hero-backdrop">
            {/* Aufbau wie in der Parallax-Vorlage: ein Wrapper, darin der
                Trigger [data-parallax-layers], darin die Ebenen mit
                data-parallax-layer. Ebene 1 ist das Foto (drei Schichten:
                unscharfe Fuellung, Foto, Abdunklung — sie bewegen sich
                gemeinsam), Ebene 3 ist der Textblock. */}
            <HeroParallax>
              <div className="parallax__layers" data-parallax-layers>
                <div className="hero-layer hero-layer--unscharf" data-parallax-layer="1" aria-hidden="true" />
                <div className="hero-layer hero-layer--foto" data-parallax-layer="1" aria-hidden="true" />
                <div className="hero-layer hero-layer--dunkel" data-parallax-layer="1" aria-hidden="true" />
                <div data-parallax-layer="3">
                  <Hero />
                </div>
              </div>
            </HeroParallax>
          </div>
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
