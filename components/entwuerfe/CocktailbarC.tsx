import { DABEI } from '../cocktailbar-daten'

/*
  Entwurf C — was dabei ist, als Liste.

  Dieselbe Formensprache wie die gewaehlte Leistungen-Liste: Haarlinien,
  laufende Nummern, keine Kaesten, keine Icons. Damit spricht die Seite an
  zwei Stellen dieselbe Sprache, statt zwei Systeme nebeneinander zu
  stellen.
*/
export default function CocktailbarC() {
  return (
    <div className="cb-c">
      <h3 className="cb-c-titel">Was dabei ist</h3>
      <ul className="cb-c-liste">
        {DABEI.map((d, i) => (
          <li key={d}>
            <span className="cb-c-nr">{String(i + 1).padStart(2, '0')}</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
