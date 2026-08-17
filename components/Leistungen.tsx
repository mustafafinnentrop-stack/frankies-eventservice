'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LEISTUNGEN } from './leistungen-daten'

/*
  Leistungen als Editorial-Liste (ausgewaehlter Entwurf A).

  Vorher standen hier sechs gleich grosse Kacheln mit je einem Strichsymbol
  und zwei bis drei Saetzen. Genau diese Form ist der Grund, warum der
  Abschnitt wie ein Baukasten wirkte.

  Jetzt: sechs Zeilen ueber die volle Breite, getrennt durch eine duenne
  Linie, der Name gross in der Anzeigeschrift, darunter ein einziger Satz.
  Beim Ueberfahren einer Zeile faehrt rechts das passende Foto ein und die
  Zeile rueckt ein Stueck nach rechts.

  Auf dem Handy gibt es kein Ueberfahren. Dort steht das Foto als schmaler
  Streifen direkt in der Zeile, die grosse Buehne entfaellt.

  Die Ueberschrift steht hier linksbuendig, anders als in den uebrigen
  Abschnitten. Das gehoert zur Form dieses Entwurfs — mittig gesetzt
  verliert die Liste ihre Achse.
*/
export default function Leistungen() {
  const [aktiv, setAktiv] = useState<number | null>(null)
  const gezeigt = aktiv !== null ? LEISTUNGEN[aktiv] : null

  return (
    <section id="leistungen">
      <div className="section-container leistungen-wrap reveal">
        <p className="leistungen-label">Unsere Leistungen</p>
        <h2 className="leistungen-titel">Was wir mitbringen</h2>

        <div className="leistungen-buehne">
          <ul className="leistungen-liste" onMouseLeave={() => setAktiv(null)}>
            {LEISTUNGEN.map((l, i) => (
              <li
                key={l.titel}
                className={`leistungen-zeile${aktiv === i ? ' ist-aktiv' : ''}`}
                onMouseEnter={() => setAktiv(i)}
              >
                <span className="leistungen-nr">{String(i + 1).padStart(2, '0')}</span>
                <span className="leistungen-text">
                  <span className="leistungen-name">{l.titel}</span>
                  <span className="leistungen-satz">{l.zeile}</span>
                </span>
                {l.bild && (
                  <span className="leistungen-mini">
                    <Image src={l.bild} alt={l.alt ?? ''} width={200} height={150}
                           sizes="100px" quality={55}
                           style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: l.pos ?? 'center' }} />
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Die Foto-Buehne steht immer, damit beim Wechsel nichts springt —
              nur das Bild darin tauscht und blendet auf. */}
          <div className={`leistungen-foto${gezeigt?.bild ? ' hat-bild' : ''}`} aria-hidden="true">
            {gezeigt?.bild && (
              <Image key={gezeigt.bild} src={gezeigt.bild} alt="" width={720} height={900}
                     sizes="420px" quality={62}
                     style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: gezeigt.pos ?? 'center' }} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
