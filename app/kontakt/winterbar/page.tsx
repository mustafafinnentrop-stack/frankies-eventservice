import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import StartseiteEffekte from '@/components/startseite/StartseiteEffekte'
import AnfrageFunnel from '@/components/startseite/AnfrageFunnel'
import '@/components/startseite/startseite.css'

const PAGE_URL = 'https://frankies-eventservice.de/kontakt/winterbar'

export const metadata: Metadata = {
  title: 'Winterbar anfragen | Frankies Eventservice',
  description:
    'Winterbar für Ihr Fest anfragen: heiße Cocktails, Punsch und Kakao an unserer mobilen Bambustheke. Drei kurze Schritte, Antwort innerhalb von 24 Stunden.',
  alternates: { canonical: PAGE_URL },
  /* Anfragestrecke fuer Anzeigen und die Winterbar-Seite. Inhaltlich fast
     gleich mit /kontakt — fuer die Suche zaehlt /winterbar, nicht diese
     Seite. Deshalb nicht im Index und nicht in der Sitemap. */
  robots: { index: false, follow: true },
}

/*
  /kontakt/winterbar (12.11.2026, Wunsch des Betreibers). Die Anfrage in
  drei Schritten, zugeschnitten auf die Winterbar. Vorher fuehrte "Winterbar
  anfragen" auf das Formular der Startseite. Fragen und Auswahlpunkte stehen
  in components/startseite/funnel-varianten.tsx.
*/
export default function WinterbarAnfrageSeite() {
  return (
    <>
      <Navbar />
      <div className="content-layer sn">
        <StartseiteEffekte />
        <AnfrageFunnel art="winterbar" />
      </div>
      <CinematicFooter />
    </>
  )
}
