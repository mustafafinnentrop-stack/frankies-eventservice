'use client'

import { STUFEN, vorwahlSenden } from './vorwahl'

/*
  Die drei Pakete, nach Ergebnis benannt (Umbau 25.10.2026): Komplette
  Festwirtschaft zuerst und als Empfehlung markiert, dann Theke mit
  Personal, dann die reine Lieferung. Der Knopf springt zum Formular
  und setzt die passenden Kaestchen.
*/
export default function Stufen() {
  const waehlen = (i: number) => {
    vorwahlSenden(STUFEN[i].wahl)
    document.getElementById('anfrage')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sn-stufen sn-reveal" role="list" aria-label="Unsere drei Pakete">
      {STUFEN.map((s, i) => (
        <article key={s.titel} className={`sn-stufe${s.empfohlen ? ' is-empfohlen' : ''}`} role="listitem">
          <span className="sn-stufe-kopf">
            <span className="sn-stufe-no">{String(i + 1).padStart(2, '0')}</span>
            {s.empfohlen && <span className="sn-stufe-badge">Unsere Empfehlung</span>}
          </span>
          <h3>{s.titel}</h3>
          <p className="sn-stufe-kurz">{s.kurz}</p>
          <p>{s.text}</p>
          <button type="button" className="sn-link" onClick={() => waehlen(i)}>
            Angebot anfordern <span aria-hidden="true">↗</span>
          </button>
        </article>
      ))}
    </div>
  )
}
