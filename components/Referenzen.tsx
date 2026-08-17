/*
  Referenzen — echte Veranstaltungen mit echten Zahlen.

  Alle Angaben stammen vom Betreiber. Nichts hier ist ausgedacht oder
  gerundet: 100 Hektoliter, 18 bzw. 12 Leute im Einsatz, 1.200 geladene
  Gaeste, 80 Gaeste. Wer hier spaeter etwas ergaenzt, muss dasselbe
  einhalten — eine erfundene Referenz ist Werbung mit einer Angabe, die
  nicht stimmt, und damit angreifbar.

  Karten ohne Zahl bekommen keine leere Zeile, sondern zeigen nur die
  Leistungen. Deshalb ist `zahlen` optional.
*/
type Referenz = {
  ort: string
  leistungen: string[]
  zahlen?: { wert: string; was: string }[]
}

const REFERENZEN: Referenz[] = [
  {
    ort: 'Schützenfest Berghausen',
    leistungen: ['Thekenservice'],
    zahlen: [
      { wert: '100', was: 'Hektoliter Bier' },
      { wert: '18', was: 'Leute im Einsatz' },
    ],
  },
  {
    ort: 'Firmenfeier Westmark',
    leistungen: ['Mobile Cocktailbar', 'Foodtruck'],
    zahlen: [{ wert: '1.200', was: 'geladene Gäste' }],
  },
  {
    ort: 'Hochzeit auf Schloss Melschede',
    leistungen: ['Getränkecatering', 'Servicepersonal', 'Kaffeestation'],
    zahlen: [{ wert: '80', was: 'Gäste' }],
  },
  {
    ort: 'Schützenfest Marmecke',
    leistungen: ['Thekenservice'],
    zahlen: [{ wert: '12', was: 'Leute im Einsatz' }],
  },
  {
    ort: 'Firmenfeier Schneider Haustechnik',
    leistungen: ['Catering', 'Mobile Cocktailbar'],
  },
  {
    ort: 'Campingplatz Kalberschnacke',
    leistungen: ['Mobile Cocktailbar'],
  },
]

export default function Referenzen() {
  return (
    <section id="referenzen">
      <div className="section-container">
        <div className="reveal grid-text">
          <p className="section-label" style={{ margin: '0 auto 1rem' }}>Referenzen</p>
          <h2 className="section-title" style={{ margin: '0 auto 1.5rem' }}>
            Wo wir dieses Jahr<br />im Einsatz waren
          </h2>
          <p className="section-text" style={{ margin: '0 auto 3rem' }}>
            Rund 20 Veranstaltungen in dieser Saison — vom kleinen Schützenfest bis zur
            Firmenfeier mit 1.200 geladenen Gästen. Eine Auswahl:
          </p>
        </div>

        <ul className="referenz-grid stagger-children reveal">
          {REFERENZEN.map((r) => (
            <li key={r.ort} className="referenz-card reveal">
              <h3>{r.ort}</h3>
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
