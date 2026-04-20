const REGIONS = [
  'Lennestadt', 'Olpe', 'Attendorn', 'Finnentrop', 'Kirchhundem',
  'Schmallenberg', 'Wenden', 'Drolshagen', 'Plettenberg', 'Meschede',
  'Kreuztal', 'Siegen', 'und weitere',
]

export default function Region() {
  return (
    <section id="region">
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">Unser Einsatzgebiet</p>
          <h2 className="section-title">Veranstaltungsservice<br />in Ihrer Nähe</h2>
          <p className="section-text">
            Wir sind im gesamten Sauerland und der Umgebung für Sie im Einsatz.
            Dabei spielt es keine Rolle, ob Ihr Fest in Lennestadt, Olpe oder
            anderswo in der Region stattfindet — denn wir kommen zu Ihnen.
            Nehmen Sie einfach Kontakt auf und wir besprechen die Details.
          </p>
          <div className="region-tags stagger-children reveal">
            {REGIONS.map((r) => (
              <span key={r} className="region-tag">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
