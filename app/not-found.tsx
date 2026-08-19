import Link from 'next/link'
import Navbar from '@/components/Navbar'
import LottieBox from '@/components/LottieBox'

/*
  Vorher lief jeder Tippfehler und jeder alte Link in die Standardseite von
  Next.js: weisse Flaeche, englischer Text, kein Weg zurueck. Diese Seite
  fuehrt stattdessen weiter — die Linkliste ist der eigentliche Zweck, die
  Animation nur der Empfang.

  Der Inhalt liegt in .content-layer, sonst legt sich body::before mit 72 %
  Schwarz darueber.
*/
const WEITER = [
  { href: '/service', text: 'Leistungen & Pakete' },
  { href: '/cocktailbar-lennestadt', text: 'Mobile Cocktailbar' },
  { href: '/getraenkeservice-schuetzenfest', text: 'Getränkeservice Schützenfest' },
  { href: '/hochzeit-sauerland', text: 'Thekenservice Hochzeit' },
  { href: '/eventservice-kreis-olpe', text: 'Eventservice Kreis Olpe' },
  { href: '/partner', text: 'Partner werden' },
]

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="content-layer">
        <section className="nf-seite">
          <div className="nf-bild">
            <LottieBox name="glas" groesse={150} />
          </div>
          <p className="section-label">Fehler 404</p>
          <h1 className="section-title">Diese Seite gibt es nicht</h1>
          <p className="section-text nf-text">
            Vielleicht ein alter Link oder ein Tippfehler. Zurück zur Startseite — oder
            rufen Sie einfach an, das geht sowieso schneller.
          </p>

          <div className="nf-knoepfe">
            <Link href="/" className="btn-primary">Zur Startseite</Link>
            <a href="tel:+4915142840916" className="btn-secondary">0151 42840916</a>
          </div>

          <p className="nf-label">Wonach Sie vielleicht gesucht haben</p>
          <ul className="nf-liste">
            {WEITER.map((w) => (
              <li key={w.href}><Link href={w.href}>{w.text}</Link></li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
