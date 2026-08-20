import type { Metadata } from 'next'
import Link from 'next/link'
import { LEISTUNGEN } from '@/components/leistungen-daten'
import { REFERENZEN } from '@/components/Referenzen'
import { BEWERTUNGEN } from '@/components/Testimonials'
import { FLATS, euro, STEUER_HINWEIS } from '@/components/preise-daten'
import EntwurfCTA from '@/components/entwuerfe/EntwurfCTA'

export const metadata: Metadata = {
  title: 'Entwurf 1 — Ruhig',
  robots: { index: false, follow: false },
}

/*
  Entwurf 1: reduziert, elegant, ruhig.

  Formsprache: Redaktion statt Werbung. Nummerierte Kapitel, Haarlinien,
  linksbuendige Typografie, genau ein Foto. Kein Kartenraster, keine
  Symbole, kein Effekt. Gold nur fuer Kapitelnummern, Zahlen und Akzente.
  Die Fakten kommen aus denselben Datenquellen wie die echte Seite.
*/

const ANLAESSE = [
  { name: 'Schützenfest', text: 'Zapfanlage, Theke und Mannschaft. In Berghausen liefen 100 Hektoliter Bier, mit 18 Leuten im Einsatz — Marmecke lief mit 12.' },
  { name: 'Hochzeit', text: 'Getränkecatering, Servicepersonal, auf Wunsch die Kaffeestation für den Nachmittag. Schloss Melschede steht mit 80 Gästen im Kalender.' },
  { name: 'Firmenfeier', text: 'Catering und Cocktailbar aus einer Hand, wie bei Schneider Haustechnik. Westmark steht mit 1.200 geladenen Gästen an.' },
  { name: 'Geburtstag & JGA', text: `Die mobile Cocktailbar als feste Pauschale — ${FLATS[0].anzahl} Cocktails, ${FLATS[0].stunden} Stunden Ausschank, ${euro(FLATS[0].preis)}.` },
  { name: 'Vereins- & Dorffest', text: 'Ausschank über das ganze Wochenende. Wir planen die Menge, liefern und kühlen — Sie bleiben auf nichts sitzen.' },
  { name: 'Campingplatz & Freigelände', text: 'Die Bar läuft autark, ohne Strom- und Wasseranschluss. Am Campingplatz Kalberschnacke stand sie auf der Wiese.' },
]

const SCHRITTE = [
  { titel: 'Anfrage', text: 'Anruf oder Formular — Datum, Ort und ungefähre Gästezahl reichen.' },
  { titel: 'Kostenloses Erstgespräch', text: 'Wir klären Ablauf, Technik und Personal. Am Telefon oder vor Ort.' },
  { titel: 'Angebot in 24 Stunden', text: 'Feste Pauschale für die Cocktailbar, individuelle Rechnung für Theke, Getränke und Personal.' },
  { titel: 'Auf- und Abbau', text: 'Wir kommen, bauen auf und räumen wieder ab. Die Bar braucht 2 × 2 Meter, mit Pavillon 3 × 3.' },
]

export default function EntwurfEins() {
  const gelaufen = REFERENZEN.filter((r) => !r.geplant)
  const geplant = REFERENZEN.filter((r) => r.geplant)

  return (
    <div className="sx-seite">
      <p className="sx-hinweis">Entwurf 1 von 3 — ruhig · <Link href="/entwurf/seite">alle Entwürfe</Link></p>

      <nav className="s1-nav">
        <a className="s1-marke" href="#">Frankies Eventservice</a>
        <div className="s1-nav-rechts">
          <a className="s1-nav-tel" href="tel:+4915142840916">0151 42840916</a>
          <a className="s1-nav-cta" href="#anfrage">Anfragen</a>
        </div>
      </nav>

      <header className="s1-hero">
        <h1>Ausschank ist unser <em>Handwerk.</em></h1>
        <p className="s1-hero-sub">
          Frankies Eventservice aus Lennestadt bringt Theke, Zapfanlage und eingespielte
          Leute zu Ihrer Veranstaltung — oder gleich die komplette Cocktailbar mit
          Bambustheke. Im Kreis Olpe und im Sauerland.
        </p>
        <EntwurfCTA klasse="s1-knoepfe" />
        <div className="s1-fakten">
          <span><strong>Rund 20</strong>Veranstaltungen in dieser Saison</span>
          <span><strong>Bis zu 18</strong>Leute im Einsatz</span>
          <span><strong>24 Stunden</strong>bis zu Ihrem Angebot</span>
        </div>
      </header>

      <figure className="s1-band">
        <img src="/ausschankwagen.webp" alt="Blick in den Ausschankwagen von Frankies Eventservice während eines Festes" style={{ objectPosition: 'center 72%' }} />
        <figcaption>Im Ausschankwagen — eigenes Foto, unsere Mannschaft. Kein Archivbild.</figcaption>
      </figure>

      <section className="s1-sektion">
        <div className="s1-kopf">
          <div>
            <span className="s1-nr">01</span>
            <h2>Was wir übernehmen</h2>
          </div>
          <p>
            Sechs Bausteine, einzeln oder zusammen. Was Sie nicht brauchen,
            bezahlen Sie nicht.
          </p>
        </div>
        <ul className="s1-zeilen">
          {LEISTUNGEN.map((l) => (
            <li key={l.titel}>
              <h3>{l.titel}</h3>
              <p>{l.zeile}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="s1-sektion">
        <div className="s1-kopf">
          <div>
            <span className="s1-nr">02</span>
            <h2>Wo wir arbeiten</h2>
          </div>
          <p>
            Hinter jedem Anlass steht hier ein Fest, das wir gemacht haben oder
            das im Kalender steht — keine Beispielliste.
          </p>
        </div>
        <ul className="s1-zeilen">
          {ANLAESSE.map((a) => (
            <li key={a.name}>
              <h3>{a.name}</h3>
              <p>{a.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="s1-sektion">
        <div className="s1-kopf">
          <div>
            <span className="s1-nr">03</span>
            <h2>So läuft es ab</h2>
          </div>
          <p>Vier Schritte zwischen Ihrer Anfrage und dem ersten gezapften Glas.</p>
        </div>
        <ol className="s1-schritte">
          {SCHRITTE.map((s) => (
            <li key={s.titel}>
              <div>
                <h3>{s.titel}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="s1-sektion">
        <div className="s1-kopf">
          <div>
            <span className="s1-nr">04</span>
            <h2>Was die Cocktailbar kostet</h2>
          </div>
          <p>
            Feste Pauschalen, {STEUER_HINWEIS} — alle Zutaten, Bambustheke, Gläser,
            Barkeeper sowie Auf- und Abbau enthalten.
          </p>
        </div>
        <ul className="s1-preise">
          {FLATS.map((f) => (
            <li key={f.anzahl}>
              <span className="was">
                {f.anzahl} Cocktails · {f.stunden} Stunden Ausschank
                <span className="fuer">{f.fuer}</span>
              </span>
              <span className="preis">{euro(f.preis)}</span>
            </li>
          ))}
        </ul>
        <p className="s1-fussnote">
          Thekenservice, Getränkecatering und Personal rechnen wir individuell —
          ein Schützenfest über vier Tage und ein Abend mit Servicekräften haben
          nichts miteinander zu tun.
        </p>
      </section>

      <section className="s1-sektion">
        <div className="s1-kopf">
          <div>
            <span className="s1-nr">05</span>
            <h2>Woran Sie uns messen können</h2>
          </div>
          <p>Die Saison in Zahlen — und die beiden Stimmen, die es bisher öffentlich gibt.</p>
        </div>
        <ul className="s1-referenzen">
          {gelaufen.map((r) => (
            <li key={r.ort}>
              <span className="ort">{r.ort}</span>
              <span className="zahl">{r.zahlen?.length ? `${r.zahlen[0].wert} ${r.zahlen[0].was}` : r.leistungen.join(' · ')}</span>
            </li>
          ))}
          {geplant.map((r) => (
            <li key={r.ort}>
              <span className="ort">{r.ort}<span className="badge">Steht an</span></span>
              <span className="zahl">{r.zahlen?.length ? `${r.zahlen[0].wert} ${r.zahlen[0].was}` : r.leistungen.join(' · ')}</span>
            </li>
          ))}
        </ul>
        <div className="s1-stimmen">
          {BEWERTUNGEN.map((b) => (
            <blockquote key={b.id}>
              „{b.text}"
              <footer>{b.name} · 5 von 5 Sternen bei Google</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="s1-sektion s1-kontakt" id="anfrage">
        <span className="s1-nr">06</span>
        <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', marginBottom: '0.5rem' }}>
          Datum, Ort, Gästezahl — mehr brauchen wir nicht.
        </h2>
        <a className="s1-tel" href="tel:+4915142840916">0151 42840916</a>
        <EntwurfCTA klasse="s1-knoepfe" />
        <p className="s1-fussnote">Ihr Angebot kommt innerhalb von 24 Stunden. Das Erstgespräch ist kostenlos.</p>
      </section>

      <footer className="s1-footer">
        <div className="s1-footer-inner">
          <span>© 2026 Frankies Eventservice · Hachener Str. 7 · 57368 Lennestadt</span>
          <span>
            <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a> · <a href="/agb">AGB</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
