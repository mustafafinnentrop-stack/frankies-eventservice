import Image from 'next/image'
import { ORTE } from '../cocktailbar-daten'

/*
  Entwurf A — Orte statt Behauptungen.

  Vorher standen hier vier Icon-Kaesten mit "Voll mobil — Wir kommen zu
  Ihrer Location" und "Ueberall einsetzbar — Garten, Wiese, Hof, Halle".
  Das sind Behauptungen ohne Beleg. Hier stehen stattdessen drei Fotos
  derselben Theke an verschiedenen Orten, jeweils benannt. Wer das sieht,
  braucht kein Icon, das ihm "mobil" sagt.
*/
export default function CocktailbarA() {
  return (
    <div className="cb-a">
      <p className="cb-a-zeile">Dieselbe Theke — überall aufgebaut, wo gefeiert wird.</p>
      <ul className="cb-a-orte">
        {ORTE.map((o) => (
          <li key={o.ort}>
            <div className="cb-a-bild">
              <Image src={o.bild} alt={o.alt} width={800} height={1000}
                     sizes="(max-width: 900px) 90vw, 380px" quality={62}
                     style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: o.pos }} />
            </div>
            <h3>{o.ort}</h3>
            <p>{o.zusatz}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
