import type { Metadata } from 'next'
import Link from 'next/link'
import { REFERENZEN } from '@/components/Referenzen'
import { BEWERTUNGEN } from '@/components/Testimonials'
import { FLATS, euro, STEUER_HINWEIS } from '@/components/preise-daten'
import EntwurfCTA from '@/components/entwuerfe/EntwurfCTA'

export const metadata: Metadata = {
  title: 'Entwurf 3 — Markant',
  robots: { index: false, follow: false },
}

/*
  Entwurf 3: moderner, markanter, mutiger — in derselben schwarz-goldenen
  Markenwelt.

  Formsprache: Uebergrosse Typografie, Laufband mit den Anlaessen, eine
  Zahlenreihe als Vertrauensblock, Leistungen als Bento-Raster aus Foto-
  und Textkacheln, und als Bruch eine komplett goldene Sektion mit den
  Cocktail-Pauschalen als schwarzen Karten. Gold ist hier einmal Flaeche
  statt immer nur Linie.
*/

const MARQUEE = ['Schützenfest', 'Hochzeit', 'Firmenfeier', 'Geburtstag', 'JGA', 'Vereinsfest', 'Dorffest', 'Sommerfest']

const KACHELN = [
  { art: 'foto', bild: '/theke-vor-ort.webp', pos: 'center 62%', gross: true, titel: 'Mobile Cocktailbar', text: 'Bambustheke, Barkeeper, bis zu 20 Cocktails — läuft komplett autark.' },
  { art: 'text', titel: 'Thekenservice & Zapfanlage', text: 'Theke, Zapftechnik und Mannschaft. Beim Schützenfest Berghausen mit 18 Leuten.' },
  { art: 'text', titel: 'Getränkecatering', text: 'Menge geplant, geliefert, gekühlt. Sie bleiben auf nichts sitzen.' },
  { art: 'text', titel: 'Servicepersonal', text: 'Eingespielte Kräfte für Ausschank, Empfang und Abräumen.' },
  { art: 'text', titel: 'Kaffeestation', text: 'Für den Nachmittag nach der Trauung.' },
  { art: 'foto', bild: '/foodtruck.webp', pos: '62% 50%', breit: true, titel: 'Catering & Foodtruck', text: 'Essen und Getränke aus einer Hand.' },
  { art: 'text', breit: true, titel: 'Etwas anderes im Kopf?', text: 'Sagen Sie uns, was Sie planen — wir sagen ehrlich, ob wir es können.' },
]

const SCHRITTE = [
  { titel: 'Anfrage', text: 'Datum, Ort, Gästezahl — Anruf oder Formular.' },
  { titel: 'Erstgespräch', text: 'Kostenlos, am Telefon oder vor Ort.' },
  { titel: 'Angebot', text: 'In 24 Stunden. Pauschale für die Bar, individuell für den Rest.' },
  { titel: 'Fest', text: 'Aufbau, Ausschank, Abbau — unsere Sache.' },
]

export default function EntwurfDrei() {
  const gelaufen = REFERENZEN.filter((r) => !r.geplant)

  return (
    <div className="sx-seite">
      <p className="sx-hinweis">Entwurf 3 von 3 — markant · <Link href="/entwurf/seite">alle Entwürfe</Link></p>

      <nav className="s3-nav">
        <a className="s3-marke" href="#">Frankies</a>
        <a className="btn-primary" href="#anfrage">Angebot anfordern</a>
      </nav>

      <header className="s3-hero">
        <h1>
          <span>Theke.</span>
          <span>Technik.</span>
          <span className="gold">Mannschaft.</span>
        </h1>
        <div className="s3-hero-zeile">
          <p className="s3-hero-sub">
            Getränke- und Barservice aus Lennestadt. Rund 20 Veranstaltungen in
            dieser Saison — mit zwölf bis achtzehn Leuten im Einsatz.
          </p>
          <EntwurfCTA klasse="s3-knoepfe" />
        </div>
      </header>

      <div className="s3-marquee" aria-hidden="true">
        <div className="s3-marquee-lauf">
          {[...MARQUEE, ...MARQUEE].map((w, i) => <span key={i}>{w}</span>)}
        </div>
      </div>

      <section className="s3-zahlen">
        <div className="s3-zahl"><strong>100 hl</strong><span>Bier an einem Wochenende — Schützenfest Berghausen</span></div>
        <div className="s3-zahl"><strong>18</strong><span>Leute im Einsatz, wenn es groß wird</span></div>
        <div className="s3-zahl"><strong>5,0 ★</strong><span>bei Google — 2 Bewertungen, beide volle Punktzahl</span></div>
        <div className="s3-zahl"><strong>24 h</strong><span>von der Anfrage bis zu Ihrem Angebot</span></div>
      </section>

      <section className="s3-sektion">
        <div className="s3-kopf">
          <h2>Was wir übernehmen</h2>
          <p>Sechs Bausteine, einzeln oder zusammen. Was Sie nicht brauchen, bezahlen Sie nicht.</p>
        </div>
        <div className="s3-bento">
          {KACHELN.map((k) => (
            <article
              key={k.titel}
              className={`s3-kachel${k.art === 'foto' ? ' foto' : ''}${k.gross ? ' gross' : ''}${k.breit ? ' breit' : ''}`}
            >
              {k.art === 'foto' && k.bild && <img src={k.bild} alt={k.titel} style={{ objectPosition: k.pos }} />}
              <h3>{k.titel}</h3>
              <p>{k.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="s3-gold">
        <section className="s3-sektion">
          <h2>Die Bar kommt zu Ihnen.</h2>
          <p className="s3-gold-intro">
            Komplett autark — ohne Strom- und Wasseranschluss, auf 2 × 2 Metern,
            mit Pavillon 3 × 3. Feste Pauschalen, {STEUER_HINWEIS}: Zutaten, Gläser,
            Barkeeper sowie Auf- und Abbau sind drin.
          </p>
          <div className="s3-flats">
            {FLATS.map((f) => (
              <div className="s3-flat" key={f.anzahl}>
                <small>{f.anzahl} Cocktails</small>
                <strong>{euro(f.preis)}</strong>
                <span>{f.stunden} Stunden Ausschank</span>
              </div>
            ))}
          </div>
          <p className="s3-gold-fuss">
            Mehr als 200 Cocktails oder mehrere Tage? Rechnen wir persönlich aus.
            Thekenservice, Getränke und Personal kalkulieren wir immer individuell.
          </p>
        </section>
      </div>

      <section className="s3-sektion">
        <div className="s3-kopf">
          <h2>Von der Anfrage zum Fest</h2>
        </div>
        <div className="s3-ablauf">
          {SCHRITTE.map((s, i) => (
            <div className="s3-schritt" key={s.titel}>
              <strong>{i + 1}</strong>
              <h3>{s.titel}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="s3-sektion">
        <div className="s3-kopf">
          <h2>Gemacht, nicht behauptet</h2>
          <p>Die Saison in echten Festen — und beide Stimmen, die es öffentlich gibt.</p>
        </div>
        <ul className="s3-referenzen">
          {gelaufen.map((r) => (
            <li key={r.ort}>
              <span className="ort">{r.ort}</span>
              <span className="zahl">{r.zahlen?.length ? `${r.zahlen[0].wert} ${r.zahlen[0].was}` : r.leistungen.join(' · ')}</span>
            </li>
          ))}
        </ul>
        <div className="s3-stimmen">
          {BEWERTUNGEN.map((b) => (
            <article className="s3-stimme" key={b.id}>
              <div className="s3-sterne" aria-label="5 von 5 Sternen">★★★★★</div>
              <p>„{b.text}"</p>
              <footer>{b.name} · Google-Bewertung</footer>
            </article>
          ))}
        </div>
      </section>

      <section className="s3-sektion s3-cta" id="anfrage">
        <h2>Lassen Sie uns anstoßen.</h2>
        <p>Datum, Ort, Gästezahl — Ihr Angebot kommt in 24 Stunden.</p>
        <EntwurfCTA klasse="s3-knoepfe" />
      </section>

      <footer className="s3-footer">
        <div className="s3-footer-inner">
          <span>© 2026 Frankies Eventservice · Hachener Str. 7 · 57368 Lennestadt</span>
          <span>
            <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a> · <a href="/agb">AGB</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
