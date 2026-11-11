import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import StartseiteEffekte from '@/components/startseite/StartseiteEffekte'
import Anfrage from '@/components/startseite/Anfrage'
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
  /kontakt (11.11.2026). Das Anfrageformular der Startseite als eigene
  Seite, damit Anzeigen und Profile direkt darauf verlinken koennen.
  Gleiches Formular, gleiche Felder, gleicher Versand (Web3Forms), nur mit
  h1 und Platz fuer den Header. Keine zweite Formularlogik.
*/
export default function KontaktSeite() {
  return (
    <>
      <Navbar />
      <div className="content-layer sn">
        <StartseiteEffekte />
        <Anfrage alsSeite />
      </div>
      <CinematicFooter />
    </>
  )
}
