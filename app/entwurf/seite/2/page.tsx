import type { Metadata } from 'next'
import Link from 'next/link'
import { LEISTUNGEN } from '@/components/leistungen-daten'
import { BEWERTUNGEN } from '@/components/Testimonials'
import { FLATS, euro } from '@/components/preise-daten'
import EntwurfCTA from '@/components/entwuerfe/EntwurfCTA'

export const metadata: Metadata = {
  title: 'Entwurf 2 — Bildgetrieben',
  robots: { index: false, follow: false },
}

/*
  Entwurf 2: bildgetrieben, emotional, auf die Veranstaltung ausgerichtet.

  Formsprache: Die Fotos und das Video tragen die Seite, der Text haelt
  sich kurz und bleibt bei den Fakten. Vollbild-Hero mit dem Foto der
  Kollegin am Tablett, Bildstreifen als Sektionsuebergaenge, Leistungen
  als Fotokarten, ein Zitat ueber dem Teamfoto, CTA ueber dem Foto der
  Bambustheke. Alles eigenes Material — kein Stockfoto.
*/

const ANLAESSE = [
  { bild: '/schuetzenfest.webp', pos: '40% 40%', name: 'Schützenfest', text: 'In Berghausen liefen 100 Hektoliter Bier — 18 Leute im Einsatz.' },
  { bild: '/kaffeestation.webp', pos: 'center 30%', name: 'Hochzeit', text: 'Getränke, Personal und Kaffeestation. Schloss Melschede steht mit 80 Gästen im Kalender.' },
  { bild: '/foodtruck.webp', pos: '62% 50%', name: 'Firmenfeier', text: 'Catering und Cocktailbar aus einer Hand — wie bei Schneider Haustechnik.' },
  { bild: '/cocktail.webp', pos: 'center 50%', name: 'Geburtstag & JGA', text: `Die Cocktailbar als Pauschale: ${FLATS[0].anzahl} Cocktails, ${FLATS[0].stunden} Stunden, ${euro(FLATS[0].preis)}.` },
  { bild: '/ausschankwagen.webp', pos: 'center 75%', name: 'Vereins- & Dorffest', text: 'Ausschank übers ganze Wochenende — Menge geplant, geliefert, gekühlt.' },
]

const SCHRITTE = [
  { titel: 'Anfrage', text: 'Datum, Ort, Gästezahl — als Anruf oder übers Formular.' },
  { titel: 'Erstgespräch', text: 'Kostenlos. Wir klären Ablauf, Technik und Personal.' },
  { titel: 'Angebot', text: 'Innerhalb von 24 Stunden, mit festen Pauschalen für die Cocktailbar.' },
  { titel: 'Ihr Fest', text: 'Wir bauen auf, schenken aus und räumen ab.' },
]

export default function EntwurfZwei() {
  const zitat = BEWERTUNGEN[0]

  return (
    <div className="sx-seite">
      <p className="sx-hinweis">Entwurf 2 von 3 — bildgetrieben · <Link href="/entwurf/seite">alle Entwürfe</Link></p>

      <header className="s2-hero">
        <nav className="s2-nav">
          <a className="s2-marke" href="#">Frankies Eventservice</a>
          <a className="btn-primary" href="#anfrage">Anfragen</a>
        </nav>
        <div className="s2-hero-foto" />
        <div className="s2-hero-verlauf" />
        <div className="s2-hero-inhalt">
          <h1>Ihr Fest.<br />Unsere Theke.</h1>
          <p className="s2-hero-sub">
            Getränke-, Theken- und Barservice aus Lennestadt — beim Schützenfest,
            auf der Firmenfeier, zur Hochzeit. Rund 20 Veranstaltungen in dieser Saison.
          </p>
          <EntwurfCTA klasse="s2-knoepfe" />
        </div>
      </header>

      <div className="s2-streifen" aria-hidden="true">
        <img src="/glaeser.webp" alt="" style={{ objectPosition: 'center 40%' }} />
        <img src="/bambustheke.webp" alt="" style={{ objectPosition: 'center 55%' }} />
        <img src="/bg-hero.webp" alt="" style={{ objectPosition: '30% 45%' }} />
      </div>

      <section className="s2-sektion">
        <div className="s2-mitte">
          <div className="s2-kopf">
            <h2>Was wir mitbringen</h2>
            <p>
              Sechs Bausteine, einzeln buchbar. Jedes Foto stammt von einem
              unserer Feste — so sieht das bei Ihnen dann auch aus.
            </p>
          </div>
          <div className="s2-karten">
            {LEISTUNGEN.map((l) => (
              <article className="s2-karte" key={l.titel}>
                {l.bild && <img src={l.bild} alt={l.alt ?? l.titel} style={{ objectPosition: l.pos }} />}
                <div className="s2-karte-text">
                  <h3>{l.titel}</h3>
                  <p>{l.zeile}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <figure className="s2-video">
        <video
          src="/cocktailbar-quer.mp4"
          poster="/cocktailbar-quer-poster.webp"
          autoPlay muted loop playsInline preload="none"
          aria-label="Video der mobilen Cocktailbar von Frankies Eventservice"
        />
        <figcaption>
          Die Bambustheke im Einsatz — komplett autark, ohne Strom- und Wasseranschluss.
          Platzbedarf: 2 × 2 Meter, mit Pavillon 3 × 3.
        </figcaption>
      </figure>

      <section className="s2-sektion">
        <div className="s2-mitte">
          <div className="s2-kopf">
            <h2>Für Ihr Fest</h2>
            <p>Hinter jedem Anlass steht ein Fest, das wir gemacht haben oder das im Kalender steht.</p>
          </div>
          <div className="s2-anlaesse">
            {ANLAESSE.map((a) => (
              <article className="s2-anlass" key={a.name}>
                <img src={a.bild} alt={a.name} style={{ objectPosition: a.pos }} />
                <div>
                  <h3>{a.name}</h3>
                  <p>{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="s2-zitat">
        <blockquote>
          <p>
            „Sehr guter, zuverlässiger Service. Alles autark, man muss sich um
            nichts kümmern. Wir würden euch jederzeit wieder buchen."
          </p>
          <footer>
            <strong>{zitat.name}</strong>
            5 von 5 Sternen bei Google — eine von zwei Bewertungen, beide mit voller Punktzahl
          </footer>
        </blockquote>
      </section>

      <section className="s2-sektion">
        <div className="s2-mitte">
          <div className="s2-kopf">
            <h2>Von der Anfrage bis zum ersten Glas</h2>
          </div>
          <div className="s2-ablauf">
            {SCHRITTE.map((s, i) => (
              <div className="s2-schritt" key={s.titel}>
                <small>{String(i + 1).padStart(2, '0')}</small>
                <h3>{s.titel}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s2-cta" id="anfrage">
        <div className="s2-cta-inhalt">
          <h2>Erzählen Sie uns von Ihrem Fest.</h2>
          <p>
            Datum, Ort, ungefähre Gästezahl — mehr brauchen wir nicht.
            Ihr Angebot kommt innerhalb von 24 Stunden, das Erstgespräch ist kostenlos.
          </p>
          <EntwurfCTA klasse="s2-knoepfe" />
        </div>
      </section>

      <footer className="s2-footer">
        <div className="s2-footer-inner">
          <span>© 2026 Frankies Eventservice · Hachener Str. 7 · 57368 Lennestadt</span>
          <span>
            <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a> · <a href="/agb">AGB</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
