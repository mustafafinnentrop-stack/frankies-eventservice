'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LEISTUNGEN } from '../leistungen-daten'

/*
  Entwurf A — Editorial-Liste.

  Keine Kacheln. Sechs Zeilen ueber die volle Breite, getrennt durch eine
  duenne Linie, der Name gross in der Anzeigeschrift. Beim Ueberfahren
  einer Zeile faehrt rechts das passende Foto ein und die Zeile rueckt
  ein Stueck nach rechts.

  Auf dem Handy gibt es kein Ueberfahren; dort steht das Foto als
  schmaler Streifen direkt in der Zeile.
*/
export default function LeistungenA() {
  const [aktiv, setAktiv] = useState<number | null>(null)
  const bild = aktiv !== null ? LEISTUNGEN[aktiv] : null

  return (
    <section className="ent-a">
      <div className="ent-container">
        <p className="ent-label">Unsere Leistungen</p>
        <h2 className="ent-titel">Was wir mitbringen</h2>

        <div className="ent-a-buehne">
          <ul className="ent-a-liste" onMouseLeave={() => setAktiv(null)}>
            {LEISTUNGEN.map((l, i) => (
              <li
                key={l.titel}
                className={`ent-a-zeile${aktiv === i ? ' ist-aktiv' : ''}`}
                onMouseEnter={() => setAktiv(i)}
              >
                <span className="ent-a-nr">{String(i + 1).padStart(2, '0')}</span>
                <span className="ent-a-text">
                  <span className="ent-a-name">{l.titel}</span>
                  <span className="ent-a-zeile-sub">{l.zeile}</span>
                </span>
                {l.bild && (
                  <span className="ent-a-mini">
                    <Image src={l.bild} alt={l.alt ?? ''} width={160} height={110}
                           sizes="160px" quality={55}
                           style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: l.pos ?? 'center' }} />
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Die Foto-Buehne. Immer da, damit beim Wechsel nichts springt —
              nur das Bild darin tauscht und blendet auf. */}
          <div className={`ent-a-foto${bild?.bild ? ' hat-bild' : ''}`} aria-hidden="true">
            {bild?.bild && (
              <Image key={bild.bild} src={bild.bild} alt="" width={720} height={900}
                     sizes="420px" quality={62}
                     style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: bild.pos ?? 'center' }} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
