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
  Die Startseite, freigegeben vom Betreiber am 14.09.2026 nach Pruefung
  des Entwurfs unter /entwurf auf dem Handy.

  Aufbau: erst die Mannschaft und der Mensch dahinter, dann was wir
  koennen, wo wir waren, wie es ablaeuft, zum Schluss die Anfrage. Die
  Unterseiten bleiben die Orte fuer Details — hier wird verlinkt, nicht
  ausgebreitet. Titel, Beschreibung und Canonical kommen aus layout.tsx.

  .content-layer legt den Inhalt ueber die fixierte Abdunkelung aus
  globals.css (body::before); .sn bringt Hintergrund und Stylesheet mit.
*/
export default function Home() {
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
