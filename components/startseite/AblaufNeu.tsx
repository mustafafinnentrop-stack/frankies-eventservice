/*
  04 / Vom ersten Gespraech zum Fest. Drei Schritte statt vier: Abschluss
  und Durchfuehrung gehoeren in einen Satz — wer am Tag uebernimmt,
  raeumt auch auf. Die Zusage "innerhalb von 24 Stunden" steht so auch im
  Kontaktbereich und im Hero der bisherigen Seite.
*/
const SCHRITTE = [
  {
    titel: 'Sie erzählen uns, was ansteht.',
    text: 'Datum, Ort, Gästezahl und Ihre Vorstellungen. Wir melden uns innerhalb von 24 Stunden mit einem Angebot.',
  },
  {
    titel: 'Wir planen den Einsatz.',
    text: 'Personal, Getränke und Equipment werden abgestimmt. Alle Details stehen vorab, damit der Ablauf sitzt.',
  },
  {
    titel: 'Am Tag selbst übernehmen wir.',
    text: 'Aufbau, Service und Abbau nach Absprache — mit einer festen Ansprechperson für Ihren Ablauf. Danach ist der Ort so ordentlich wie vorher.',
  },
]

export default function AblaufNeu() {
  return (
    <section className="sn-ablauf" id="ablauf" aria-labelledby="sn-ablauf-titel">
      <div className="sn-top sn-reveal">
        <span className="sn-eyebrow">04 / Vom ersten Gespräch zum Fest</span>
      </div>
      <div className="sn-ablauf-layout">
        <h2 className="sn-reveal" id="sn-ablauf-titel">Vorher klären.<br /><em>Vor Ort machen.</em></h2>
        <div>
          {SCHRITTE.map((s, i) => (
            <div className="sn-step sn-reveal" key={s.titel}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.titel}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
