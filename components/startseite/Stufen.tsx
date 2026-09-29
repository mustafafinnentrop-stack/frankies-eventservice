'use client'

import { STUFEN, vorwahlSenden } from './vorwahl'

/*
  Die Frage, die Anrufer wirklich stellen: "Macht ihr auch das Personal
  dazu?" Statt vier Leistungsbereichen aus Anbietersicht drei Stufen aus
  Kundensicht — sortiert danach, wie viel jemand selbst machen will.
  Die Details stehen darunter im Akkordeon.
*/
export default function Stufen() {
  const waehlen = (i: number) => {
    vorwahlSenden(STUFEN[i].wahl)
    document.getElementById('anfrage')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sn-stufen sn-reveal" role="list" aria-label="Drei Stufen: wie viel Sie selbst machen">
      {STUFEN.map((s, i) => (
        <article key={s.titel} className="sn-stufe" role="listitem">
          <span className="sn-stufe-no">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s.titel}</h3>
          <p className="sn-stufe-kurz">{s.kurz}</p>
          <p>{s.text}</p>
          <button type="button" className="sn-link" onClick={() => waehlen(i)}>
            Das brauche ich <span aria-hidden="true">↗</span>
          </button>
        </article>
      ))}
    </div>
  )
}
