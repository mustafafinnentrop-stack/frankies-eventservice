import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import StartseiteEffekte from '@/components/startseite/StartseiteEffekte'
import StartseiteHero from '@/components/startseite/StartseiteHero'
import Mannschaft from '@/components/startseite/Mannschaft'
import LeistungenNeu from '@/components/startseite/LeistungenNeu'
import Einsaetze from '@/components/startseite/Einsaetze'
import AblaufNeu from '@/components/startseite/AblaufNeu'
import Anfrage from '@/components/startseite/Anfrage'
import '@/components/startseite/startseite.css'

/*
  Entwurf der neuen Startseite. Liegt unter /entwurf, damit der Betreiber
  sie auf dem Handy pruefen kann, bevor sie die bisherige Startseite
  ersetzt. noindex: Suchmaschinen sollen nicht zwei Startseiten sehen.

  Der Aufbau folgt der Vorlage, die der Betreiber vorgegeben hat: erst die
  Mannschaft und der Mensch dahinter, dann was wir koennen, dann wo wir
  waren, wie es ablaeuft, und zum Schluss die Anfrage. Die Unterseiten
  bleiben die Orte fuer Details — hier wird verlinkt, nicht ausgebreitet.
*/
export const metadata: Metadata = {
  title: 'Entwurf Startseite | Frankies Eventservice',
  robots: { index: false, follow: false },
}

export default function EntwurfStartseite() {
  return (
    <>
      <Navbar />
      <div className="content-layer sn">
        <StartseiteEffekte />
        <StartseiteHero />
        <Mannschaft />
        <LeistungenNeu />
        <Einsaetze />
        <AblaufNeu />
        <Anfrage />
      </div>
      <CinematicFooter />
    </>
  )
}
