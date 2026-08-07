import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import EventStrip from '@/components/EventStrip'
import Leistungen from '@/components/Leistungen'
import Cocktailbar from '@/components/Cocktailbar'
import Ueber from '@/components/Ueber'
import Ablauf from '@/components/Ablauf'
import Region from '@/components/Region'
import Kontakt from '@/components/Kontakt'
import RevealWrapper from '@/components/RevealWrapper'
import ClientEffects from '@/components/ClientEffects'
import { CinematicFooter } from '@/components/ui/motion-footer'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Der Footer liegt fixiert unter dem Inhalt und wird beim Scrollen
          freigelegt. Damit das funktioniert, muss der Inhalt darueber einen
          eigenen Hintergrund und eine hoehere Ebene haben — sonst scheint der
          Footer von Anfang an durch. */}
      <div className="relative z-10 bg-[var(--color-bg)]">
        <RevealWrapper>
          <Hero />
          <EventStrip />
          <Leistungen />
          <Cocktailbar />
          <Ueber />
          <Ablauf />
          <Region />
          <Kontakt />
        </RevealWrapper>
      </div>
      <CinematicFooter />
      <ClientEffects />
    </>
  )
}
