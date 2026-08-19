'use client'

import { useRef } from 'react'
import LottieBox, { type LottieSteuerung } from '../LottieBox'

/*
  Drei Varianten fuer denselben Moment: die Sekunde nach dem Absenden des
  Anfrageformulars. Der Moment ist bewusst gewaehlt — dort steht heute nur
  "Vielen Dank!" als Text, und die Animation laedt erst nach dem Klick. Auf
  der Startseite kostet sie damit kein Byte.

  Alle drei zeigen denselben Text und denselben Button. Unterschiedlich ist
  nur die Animation, sonst waere der Vergleich wertlos.
*/
const VARIANTEN = [
  {
    buchstabe: 'A',
    name: 'haken',
    titel: 'Haken im Ring',
    sagt: 'Angekommen. Neutral, versteht jeder, passt später auch auf jede andere Bestätigung.',
  },
  {
    buchstabe: 'B',
    name: 'glas',
    titel: 'Glas füllt sich',
    sagt: 'Erklärt nebenbei, worum es geht. Das Glas ist das Zeichen des Betriebs, nicht irgendein Symbol.',
  },
  {
    buchstabe: 'C',
    name: 'anstossen',
    titel: 'Anstoßen',
    sagt: 'Der Ton ist Feier statt Formular. Am stärksten — und am lautesten.',
  },
]

function Variante({ v }: { v: (typeof VARIANTEN)[number] }) {
  // Die Animation läuft einmal durch. Auf dem Handy ist der erste Durchlauf
  // schnell verpasst, deshalb der Knopf darunter.
  const steuerung = useRef<LottieSteuerung>(null)

  return (
    <article className="entw-block">
      <header className="entw-kopf">
        <span className="entw-nr">{v.buchstabe}</span>
        <div>
          <h2>{v.titel}</h2>
          <p>{v.sagt}</p>
        </div>
      </header>

      <div className="form-success entw-erfolg">
        <LottieBox ref={steuerung} name={v.name} groesse={150} />
        <h3>Vielen Dank!</h3>
        <p>Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden.</p>
        <span className="btn-primary entw-knopf-attrappe">Direkt Termin buchen</span>
      </div>

      <button type="button" className="entw-nochmal" onClick={() => steuerung.current?.nochmal()}>
        Nochmal abspielen
      </button>
    </article>
  )
}

function Vierhundertvier() {
  const steuerung = useRef<LottieSteuerung>(null)

  return (
    <article className="entw-block">
      <header className="entw-kopf">
        <span className="entw-nr">+</span>
        <div>
          <h2>Zweiter Platz: die 404-Seite</h2>
          <p>
            Die haben wir bisher nicht. Wer sich vertippt oder einem alten Link folgt, sieht
            die Standardmeldung von Next.js — weiße Seite, englischer Text. Dieselbe Animation
            trägt dort die Entschuldigung.
          </p>
        </div>
      </header>

      <div className="form-success entw-erfolg">
        <LottieBox ref={steuerung} name="glas" groesse={130} />
        <h3>Diese Seite gibt es nicht</h3>
        <p>
          Vielleicht ein alter Link. Zurück zur Startseite — oder rufen Sie einfach an, das
          geht sowieso schneller.
        </p>
        <span className="btn-primary entw-knopf-attrappe">Zur Startseite</span>
      </div>

      <button type="button" className="entw-nochmal" onClick={() => steuerung.current?.nochmal()}>
        Nochmal abspielen
      </button>
    </article>
  )
}

export default function AnimationEntwuerfe() {
  return (
    <div className="entw-seite">
      <p className="section-label">Entwurf — nicht im Index</p>
      <h1 className="section-title">Animationen: drei Varianten</h1>
      <p className="section-text entw-vorwort">
        Gezeigt ist der Moment direkt nach dem Absenden des Anfrageformulars. Dort steht heute
        nur „Vielen Dank!" als Text. Das ist die einzige Stelle auf der Seite, an der eine
        Animation nichts kostet: Sie wird erst nach dem Klick geladen — wer nur liest, bekommt
        sie nie zu sehen und wartet auch nicht darauf.
      </p>
      <p className="section-text entw-vorwort">
        Alle drei laufen einmal durch. Mit dem Knopf darunter starten Sie sie neu.
      </p>

      {VARIANTEN.map((v) => <Variante key={v.name} v={v} />)}

      <Vierhundertvier />

      <p className="section-text entw-vorwort entw-schluss">
        Wo ich <strong>keine</strong> Animation setzen würde: in den Leistungen — dort haben wir
        gerade Symbole durch echte Fotos ersetzt, Zeichentrick wäre ein Rückschritt. Im Hero —
        jede Animation dort verzögert genau das, was Google als Ladezeit misst. Und im Ablauf —
        der Pfad dort bewegt sich bereits.
      </p>
    </div>
  )
}
