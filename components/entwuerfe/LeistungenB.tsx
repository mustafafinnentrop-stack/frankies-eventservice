import Image from 'next/image'
import { LEISTUNGEN } from './leistungen-daten'

/*
  Entwurf B — Foto-Raster, ungleich gross.

  Die Fotos tragen den Abschnitt, der Text steht darin. Die Kacheln sind
  bewusst unterschiedlich gross: die erste ueber zwei Spalten und zwei
  Reihen, die uebrigen kleiner. Dadurch entsteht eine Rangfolge statt
  sechs gleichwertiger Kaesten.

  Die beiden Leistungen ohne Foto werden zu rein typografischen Kacheln.
  Das ist hier kein Notbehelf, sondern der Bruch, der das Raster
  lesbar macht.
*/
export default function LeistungenB() {
  return (
    <section className="ent-b">
      <div className="ent-container">
        <p className="ent-label">Unsere Leistungen</p>
        <h2 className="ent-titel">Was wir mitbringen</h2>

        <ul className="ent-b-raster">
          {LEISTUNGEN.map((l, i) => (
            <li key={l.titel} className={`ent-b-kachel${i === 0 ? ' ist-gross' : ''}${i === LEISTUNGEN.length - 1 ? ' ist-breit' : ''}${l.bild ? '' : ' ohne-bild'}`}>
              {l.bild && (
                <Image src={l.bild} alt={l.alt ?? ''} width={900} height={700}
                       sizes={i === 0 ? '(max-width: 900px) 100vw, 620px' : '(max-width: 900px) 50vw, 310px'}
                       quality={62}
                       style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: l.pos ?? 'center' }} />
              )}
              <div className="ent-b-inhalt">
                <h3>{l.titel}</h3>
                <p>{l.zeile}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
