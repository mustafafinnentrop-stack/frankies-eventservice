import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import StartseiteEffekte from '@/components/startseite/StartseiteEffekte'
import AnfrageFunnel from '@/components/startseite/AnfrageFunnel'
import '@/components/startseite/startseite.css'

const PAGE_URL = 'https://frankies-eventservice.de/kontakt'

export const metadata: Metadata = {
  title: 'Kontakt & Anfrage | Frankies Eventservice Lennestadt',
  description:
    'Anfrage an Frankies Eventservice: Getränke, Theke und Personal für Schützenfest, Hochzeit, Firmenfeier im Sauerland. Antwort innerhalb von 24 Stunden.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: PAGE_URL,
    siteName: 'Frankies Eventservice',
    title: 'Kontakt & Anfrage | Frankies Eventservice',
    description: 'Erzählen Sie uns kurz von Ihrem Fest. Antwort innerhalb von 24 Stunden.',
    images: [{ url: 'https://frankies-eventservice.de/og/home.jpg', width: 1200, height: 630, alt: 'Frankies Eventservice, Lennestadt' }],
  },
}

/*
  /kontakt (11.11.2026). Die Anfrage als eigene Seite in drei Schritten
  (AnfrageFunnel), damit Anzeigen und Profile direkt darauf verlinken
  koennen. Gleiche Fragen und gleicher Versand wie das Formular der
  Startseite; beides kommt aus components/startseite/anfrage-daten.ts.
*/
export default function KontaktSeite() {
  return (
    <>
      <Navbar />
      <div className="content-layer sn">
        <StartseiteEffekte />
        <AnfrageFunnel />
      </div>
      <CinematicFooter />
    </>
  )
}
