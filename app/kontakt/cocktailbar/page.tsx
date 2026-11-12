import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import StartseiteEffekte from '@/components/startseite/StartseiteEffekte'
import AnfrageFunnel from '@/components/startseite/AnfrageFunnel'
import '@/components/startseite/startseite.css'

const PAGE_URL = 'https://frankies-eventservice.de/kontakt/cocktailbar'

export const metadata: Metadata = {
  title: 'Cocktailbar anfragen | Frankies Eventservice',
  description:
    'Mobile Cocktailbar für Ihre Feier anfragen: Bambustheke, Barkeeper und Zutaten kommen zu Ihnen. Drei kurze Schritte, Antwort innerhalb von 24 Stunden.',
  alternates: { canonical: PAGE_URL },
  /* Anfragestrecke fuer Anzeigen und die Cocktailbar-Seite. Inhaltlich fast
     gleich mit /kontakt — fuer die Suche zaehlt /cocktailbar-lennestadt,
     nicht diese Seite. Deshalb nicht im Index und nicht in der Sitemap. */
  robots: { index: false, follow: true },
}

/*
  /kontakt/cocktailbar (12.11.2026, Wunsch des Betreibers). Die Anfrage in
  drei Schritten, zugeschnitten auf die mobile Cocktailbar. Die Knoepfe der
  Cocktailbar-Seite fuehren hierher; ein dort gewaehltes Paket kommt ueber
  ?paket=… vorausgewaehlt an. Fragen und Auswahlpunkte stehen in
  components/startseite/funnel-varianten.tsx.
*/
export default function CocktailbarAnfrageSeite() {
  return (
    <>
      <Navbar />
      <div className="content-layer sn">
        <StartseiteEffekte />
        <AnfrageFunnel art="cocktailbar" />
      </div>
      <CinematicFooter />
    </>
  )
}
