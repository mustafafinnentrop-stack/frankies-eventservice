export default function Ablauf() {
  const steps = [
    {
      num: '01',
      title: 'Anfrage',
      text: 'Zunächst kontaktieren Sie uns mit Datum, Ort und Art der Veranstaltung. Anschließend melden wir uns innerhalb von 24 Stunden bei Ihnen zurück.',
    },
    {
      num: '02',
      title: 'Planung',
      text: 'Danach besprechen wir gemeinsam den Umfang und die Personalgröße. Außerdem klären wir alle Details, damit der Ablauf reibungslos funktioniert.',
    },
    {
      num: '03',
      title: 'Durchführung',
      text: 'Am Veranstaltungstag ist unser Team pünktlich vor Ort. Sobald alles aufgebaut ist, übernehmen wir den kompletten Getränkeservice.',
    },
    {
      num: '04',
      title: 'Abschluss',
      text: 'Nach der Veranstaltung räumen wir alles sauber auf. Folglich hinterlassen wir den Veranstaltungsort ordentlich und aufgeräumt — ohne Mehraufwand für Sie.',
    },
  ]

  return (
    <section id="ablauf">
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">So arbeiten wir</p>
          <h2 className="section-title">In vier Schritten<br />zu Ihrem Event</h2>
        </div>
        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.num} className="process-step reveal">
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
