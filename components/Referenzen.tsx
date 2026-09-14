import { REFERENZEN, type Referenz } from './referenzen-daten'
// Weiter von hier exportiert, damit bestehende Importe nicht brechen.
export { REFERENZEN }
export type { Referenz }

export default function Referenzen() {
  return (
    <section id="referenzen">
      <div className="section-container">
        <div className="reveal grid-text">
          <p className="section-label" style={{ margin: '0 auto 1rem' }}>Referenzen</p>
          <h2 className="section-title" style={{ margin: '0 auto 1.5rem' }}>
            Wo wir dieses Jahr<br />im Einsatz sind
          </h2>
          <p className="section-text" style={{ margin: '0 auto 3rem' }}>
            Rund 20 Veranstaltungen in dieser Saison — vom kleinen Schützenfest bis zur
            Firmenfeier mit 1.200 geladenen Gästen. Eine Auswahl aus dem, was gelaufen
            ist und was noch ansteht:
          </p>
        </div>

        <ul className="referenz-grid stagger-children reveal">
          {REFERENZEN.map((r) => (
            <li key={r.ort} className="referenz-card reveal">
              <div className="referenz-kopf">
                <h3>{r.ort}</h3>
                {r.geplant && <span className="referenz-status">Steht an</span>}
              </div>
              <p className="referenz-leistungen">{r.leistungen.join(' · ')}</p>
              {r.zahlen && (
                <dl className="referenz-zahlen">
                  {r.zahlen.map((z) => (
                    <div key={z.was}>
                      <dt>{z.wert}</dt>
                      <dd>{z.was}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
