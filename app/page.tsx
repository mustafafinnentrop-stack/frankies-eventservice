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
          <Hero />
          <EventStrip />
          <Leistungen />
          <Cocktailbar />
          <Ueber />
          <Ablauf />
          <Region />
          <Testimonials />
          <Kontakt />
        </RevealWrapper>
      </div>
      <CinematicFooter />
      <ClientEffects />
    </>
  )
}
