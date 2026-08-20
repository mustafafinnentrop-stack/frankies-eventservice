'use client'

import { REFERENZEN } from '../Referenzen'

/*
  Drei Hero-Entwuerfe. Bewusst drei verschiedene Ansaetze, nicht drei
  Farbvarianten desselben Entwurfs.

  Was am bestehenden Hero als beliebig gilt und hier jeweils angegriffen
  wird:

    - Alles zentriert. Label mittig, Ueberschrift mittig, Text mittig —
      und darunter geht es in jeder Section genauso weiter.
    - Das rotierende Wort ("Wir machen [Ihr Fest] perfekt"). Das Muster
      steht in jedem zweiten Startup-Template.
    - Ein flaechendeckender Schwarzschleier von 58 % ueber dem Foto. Das
      Foto ist gut, man sieht es nur nicht.
    - Der Text sagt, was gut werden soll, nicht was war.

  A greift die Zentrierung und den Schleier an, B die Behauptung ohne
  Beleg, C die Statik.
*/

const TELEFON = 'tel:+4915142840916'

/* ---------- A: Dokumentarisch ---------- */

function HeroA() {
  return (
    <header className="eh eh-a">
      {/* Kein flaechiger Schleier mehr, sondern ein Verlauf nur von unten.
          Oben bleibt das Foto unangetastet, unten traegt es den Text. */}
      <div className="eh-a-foto" />
      <div className="eh-a-verlauf" />
      <div className="eh-a-inhalt">
        {/* Kein Kicker. Das kleine goldene Grossbuchstaben-Label ueber jeder
            Ueberschrift ist genau das Muster, das dieser Entwurf angreift —
            und ueber dem hellen Foto kam es gemessen auf 1,38:1, also
            unlesbar. Die Ortsangabe steht in der Unterzeile. */}
        <h1>
          Wir schenken aus,<br />wo gefeiert wird.
        </h1>
        <p className="eh-sub">
          Theke, Zapfanlage und Mannschaft — oder die komplette Cocktailbar.
          Im Kreis Olpe und im Sauerland.
        </p>
        <div className="eh-a-fakten">
          <span>Rund 20 Feste in dieser Saison</span>
          <span>Bis zu 18 Leute im Einsatz</span>
          <span>Angebot in 24 Stunden</span>
        </div>
        <div className="eh-knoepfe">
          <span className="btn-primary">Angebot anfordern</span>
          <a href={TELEFON} className="btn-secondary">0151 42840916</a>
        </div>
      </div>
    </header>
  )
}

/* ---------- B: Der Beleg zuerst ---------- */

function HeroB() {
  // Nur abgeschlossene Veranstaltungen. Was noch ansteht, taugt nicht als
  // Beleg — dieselbe Regel wie in der Referenzliste selbst.
  const gelaufen = REFERENZEN.filter((r) => !r.geplant)

  return (
    <header className="eh eh-b">
      <div className="eh-b-raster">
        <div className="eh-b-text">
          <p className="eh-kicker">Getränke- &amp; Thekenservice · Lennestadt</p>
          <h1>
            100 Hektoliter.<br />18 Leute.<br />Ein Wochenende.
          </h1>
          <p className="eh-sub">
            Das war das Schützenfest Berghausen. Sagen Sie uns, was bei Ihnen
            ansteht — Theke, Personal, Getränke oder die komplette Cocktailbar.
          </p>
          <div className="eh-knoepfe">
            <span className="btn-primary">Angebot anfordern</span>
            <a href={TELEFON} className="btn-secondary">0151 42840916</a>
          </div>
        </div>

        <ul className="eh-b-liste">
          {gelaufen.map((r) => (
            <li key={r.ort}>
              <span className="eh-b-ort">{r.ort}</span>
              <span className="eh-b-zahl">
                {r.zahlen?.length
                  ? `${r.zahlen[0].wert} ${r.zahlen[0].was}`
                  : r.leistungen[0]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

/* ---------- C: Geteilt, mit Bewegung ---------- */

function HeroC() {
  return (
    <header className="eh eh-c">
      <div className="eh-c-text">
        <p className="eh-kicker">Getränke- &amp; Thekenservice · Lennestadt</p>
        <h1>
          Vom Schützenfest<br />bis zur Cocktailbar.
        </h1>
        <p className="eh-sub">
          Wir bringen Theke, Technik und Mannschaft mit. Sie feiern,
          wir kümmern uns um den Rest.
        </p>
        <div className="eh-knoepfe">
          <span className="btn-primary">Angebot anfordern</span>
          <a href={TELEFON} className="btn-secondary">0151 42840916</a>
        </div>
      </div>
      <div className="eh-c-video">
        {/* Eigenes Material, kein Stockvideo. poster sorgt dafuer, dass
            sofort ein Bild steht; preload="none" haelt die Datei vom
            ersten Laden fern. */}
        <video
          src="/cocktailbar-quer.mp4"
          poster="/cocktailbar-quer-poster.webp"
          autoPlay muted loop playsInline preload="none"
          aria-hidden="true"
        />
      </div>
    </header>
  )
}

/* ---------- Entwurfsseite ---------- */

const VARIANTEN = [
  {
    buchstabe: 'A',
    titel: 'Dokumentarisch',
    was: 'Das Foto trägt, der Text hält sich zurück. Nichts mehr mittig, kein Schleier über dem ganzen Bild — nur ein Verlauf von unten, damit der Text lesbar bleibt. Das rotierende Wort ist weg.',
    Bau: HeroA,
  },
  {
    buchstabe: 'B',
    titel: 'Der Beleg zuerst',
    was: 'Statt zu versprechen, was gut wird, steht da, was war. Die Referenzen sind der Hero. Kein Foto im Vordergrund, dafür Zahlen, die kein Wettbewerber abschreiben kann.',
    Bau: HeroB,
  },
  {
    buchstabe: 'C',
    titel: 'Geteilt, mit Bewegung',
    was: 'Text links, Ihr eigenes Video rechts. Bricht die Mittelachse komplett. Nutzt ein Material, das kein Template hat — Ihre Aufnahme von der Bambustheke.',
    Bau: HeroC,
  },
]

export default function HeroEntwuerfe() {
  return (
    <div className="eh-seite">
      <div className="eh-vorwort">
        <p className="section-label">Entwurf — nicht im Index</p>
        <h1 className="section-title">Hero: drei Ansätze</h1>
        <p className="section-text">
          Der Hero setzt den Ton für alles darunter. Drei verschiedene Wege, nicht
          drei Farbvarianten. Jeder ist unten in voller Höhe zu sehen, so wie er
          auf der Startseite stehen würde.
        </p>
      </div>

      {VARIANTEN.map(({ buchstabe, titel, was, Bau }) => (
        <section key={buchstabe} className="eh-block">
          <div className="eh-kopf">
            <span className="eh-nr">{buchstabe}</span>
            <div>
              <h2>{titel}</h2>
              <p>{was}</p>
            </div>
          </div>
          <Bau />
        </section>
      ))}

      <div className="eh-vorwort eh-schluss">
        <p className="section-text">
          Fällt die Wahl, ziehe ich den Takt der gewählten Variante durch die
          restlichen Abschnitte durch — sonst bleibt der Rest der Seite so
          gleichförmig wie bisher.
        </p>
      </div>
    </div>
  )
}
