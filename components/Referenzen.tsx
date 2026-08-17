import Image from 'next/image'

/*
  Referenzen — echte Veranstaltungen mit echten Zahlen.

  Alle Angaben stammen vom Betreiber. Nichts hier ist ausgedacht oder
  gerundet: 100 Hektoliter, 18 bzw. 12 Leute im Einsatz, 1.200 geladene
  Gaeste, 80 Gaeste.

  Wichtig ist das Feld `geplant`. Westmark und Schloss Melschede sind
  gebucht, aber noch nicht gelaufen. Sie hier ohne Kennzeichnung
  einzureihen hiesse zu behaupten, sie seien bereits durchgefuehrt — das
  waere schlicht falsch und bei einer Werbeaussage auch angreifbar.
  Deshalb tragen sie sichtbar "Steht an", und die Ueberschrift steht im
  Praesens statt in der Vergangenheit.
*/
type Referenz = {
  ort: string
  leistungen: string[]
  zahlen?: { wert: string; was: string }[]
  geplant?: true
}

const REFERENZEN: Referenz[] = [
  {
    ort: 'Firmenfeier Westmark',
    leistungen: ['Mobile Cocktailbar', 'Foodtruck'],
    zahlen: [{ wert: '1.200', was: 'geladene Gäste' }],
    geplant: true,
  },
  {
    ort: 'Hochzeit auf Schloss Melschede',
    leistungen: ['Getränkecatering', 'Servicepersonal', 'Kaffeestation'],
    zahlen: [{ wert: '80', was: 'Gäste' }],
    geplant: true,
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
            Wo wir dieses Jahr<br />im Einsatz sind
          </h2>
          <p className="section-text" style={{ margin: '0 auto 3rem' }}>
            Rund 20 Veranstaltungen in dieser Saison — vom kleinen Schützenfest bis zur
            Firmenfeier mit 1.200 geladenen Gästen. Eine Auswahl aus dem, was gelaufen
            ist und was noch ansteht:
          </p>
        </div>

        {/* Berghausen steht vorne und gross: es ist die groesste bereits
            durchgefuehrte Veranstaltung, und dazu gibt es das Foto der
            Mannschaft. Das Bild belegt die Zahl daneben — 18 Leute im
            Einsatz sieht man, statt es nur zu lesen. */}
        <div className="referenz-featured reveal">
          <div className="referenz-featured-bild">
            <Image
              src="/team.webp"
              alt="Das Team von Frankies Eventservice hinter der Theke beim Schützenfest Berghausen"
              width={800}
              height={1000}
              sizes="(max-width: 900px) 100vw, 460px"
              quality={62}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="referenz-featured-text">
            <p className="referenz-leistungen">Thekenservice</p>
            <h3>Schützenfest Berghausen</h3>
            <p className="section-text" style={{ margin: '0 0 1.75rem', textAlign: 'left' }}>
              Das größte Fest, das wir in dieser Saison übernommen haben. Theke,
              Zapftechnik und Mannschaft über das ganze Wochenende.
            </p>
            <dl className="referenz-zahlen">
              <div>
                <dt>100</dt>
                <dd>Hektoliter Bier</dd>
              </div>
              <div>
                <dt>18</dt>
                <dd>Leute im Einsatz</dd>
              </div>
            </dl>
          </div>
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
