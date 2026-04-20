import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import EventStrip from '@/components/EventStrip'
import Leistungen from '@/components/Leistungen'
import Cocktailbar from '@/components/Cocktailbar'
import Ueber from '@/components/Ueber'
import Ablauf from '@/components/Ablauf'
import Region from '@/components/Region'
import Kontakt from '@/components/Kontakt'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import ClientEffects from '@/components/ClientEffects'

export default function Home() {
  return (
    <>
      <Navbar />
      <RevealWrapper>
        <Hero />
        <EventStrip />
        <Leistungen />
        <Cocktailbar />
        <Ueber />
        <Ablauf />
        <Region />
        <Kontakt />
        <Footer />
      </RevealWrapper>
      <ClientEffects />
    </>
  )
}
