import { REFERENZEN } from '@/components/Referenzen'

/*
  03 / Im Einsatz. Die Faelle haengen an components/Referenzen.tsx — der
  einzigen Stelle mit den echten Zahlen. Jeder Fall hier wird ueber seinen
  Ort dort nachgeschlagen; gibt es ihn dort nicht, wird er nicht gezeigt.
  So kann hier kein Einsatz stehen, den es nicht gab. Geplante Termine
  (geplant: true) laufen sichtbar als "Steht an" unter der Liste.
*/
const FAELLE = [
  {
    ort: 'Schützenfest Berghausen',
    art: 'Schützenfest',
    name: 'Berghausen',
    umfang: 'Thekenservice & Mannschaft',
    text: 'Schützenfest mit eigener Mannschaft: 18 Leute im Einsatz und 100 Hektoliter Bier über die Theke.',
  },
  {
    ort: 'Schützenfest Marmecke',
    art: 'Schützenfest',
    name: 'Marmecke',
    umfang: 'Thekenservice',
    text: 'Schützenfest mit zwölf Leuten hinter der Theke — Aufbau, Ausschank und Abbau aus einer Hand.',
  },
  {
    ort: 'Firmenfeier Schneider Haustechnik',
    art: 'Firmenfeier',
    name: 'Schneider Haustechnik',
    umfang: 'Catering & Cocktailbar',
    text: 'Firmenfeier mit Catering und mobiler Cocktailbar. Die Bar wird am Veranstaltungsort aufgebaut, die Drinks werden dort gemixt.',
  },
  {
    ort: 'Campingplatz Kalberschnacke',
    art: 'Mobile Cocktailbar',
    name: 'Kalberschnacke',
    umfang: 'Cocktails auf dem Campingplatz',
    text: 'Die mobile Theke im Freien auf der Wiese des Campingplatzes — Cocktails frisch vor Ort gemixt.',
  },
]

export default function Einsaetze() {
  const faelle = FAELLE
    .map((f) => ({ ...f, ref: REFERENZEN.find((r) => r.ort === f.ort && !r.geplant) }))
    .filter((f) => f.ref)
  const geplant = REFERENZEN.filter((r) => r.geplant)

  return (
    <section className="sn-einsaetze" id="einsaetze" aria-labelledby="sn-einsaetze-titel">
      <div className="sn-top sn-reveal">
        <span className="sn-eyebrow">03 / Im Einsatz</span>
        <span className="sn-note">Feste aus unserer Region.</span>
      </div>
      <div className="sn-einsaetze-heading sn-reveal">
        <h2 id="sn-einsaetze-titel">Wo wir schon<br /><em>mit angepackt haben.</em></h2>
        <p>Andere Gäste, andere Abläufe.<br />Hier wird sichtbar, was wir übernehmen.</p>
      </div>

      <div>
        {faelle.map((f, i) => (
          <details className="sn-case sn-reveal" key={f.ort} open={i === 0}>
            <summary>
              <span className="sn-case-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <span className="sn-case-type">{f.art}</span>
                <h3>{f.name}</h3>
              </div>
              <span className="sn-case-scope">{f.umfang}</span>
              <span className="sn-case-arrow" aria-hidden="true">↗</span>
            </summary>
            <div className="sn-case-body">
              <p>{f.text}</p>
              <dl>
                <div><dt>Veranstaltung</dt><dd>{f.ref!.ort}</dd></div>
                <div><dt>Unser Einsatz</dt><dd>{f.ref!.leistungen.join(' · ')}</dd></div>
                {f.ref!.zahlen?.map((z) => (
                  <div key={z.was}><dt>{z.was}</dt><dd>{z.wert}</dd></div>
                ))}
              </dl>
            </div>
          </details>
        ))}
      </div>

      {geplant.length > 0 && (
        <p className="sn-geplant sn-reveal">
          <strong>Steht an</strong>
          {geplant.map((r) => (
            <span key={r.ort}>{r.ort}{r.zahlen?.[0] ? ` — ${r.zahlen[0].wert} ${r.zahlen[0].was}` : ''}</span>
          ))}
        </p>
      )}
    </section>
  )
}
