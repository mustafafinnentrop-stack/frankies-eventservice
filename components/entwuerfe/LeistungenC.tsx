'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { LEISTUNGEN } from '../leistungen-daten'

/*
  Entwurf C — Sticky-Split.

  Links bleibt ein grosses Foto stehen, rechts scrollen die Leistungen
  daran vorbei. Sobald eine Leistung in die Mitte des Bildschirms kommt,
  wechselt das Foto links. Der Abschnitt bewegt sich also beim Scrollen,
  ohne dass man etwas anklicken muss.

  Die beiden Leistungen ohne Foto zeigen links stattdessen ihren Namen
  gross gesetzt — die Buehne bleibt gefuellt, es entsteht keine Luecke.

  Ohne JavaScript und bei "weniger Bewegung" steht schlicht das erste
  Foto; die Liste rechts ist vollstaendig lesbar. Kein Inhalt haengt am
  Effekt.
*/
export default function LeistungenC() {
  const [aktiv, setAktiv] = useState(0)
  const zeilen = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const beobachter = new IntersectionObserver(
      (eintraege) => {
        // Der sichtbarste Eintrag im mittleren Streifen gewinnt.
        const treffer = eintraege
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!treffer) return
        const i = zeilen.current.indexOf(treffer.target as HTMLLIElement)
        if (i >= 0) setAktiv(i)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.5, 1] }
    )
    zeilen.current.forEach((el) => el && beobachter.observe(el))
    return () => beobachter.disconnect()
  }, [])

  const l = LEISTUNGEN[aktiv]

  return (
    <section className="ent-c">
      <div className="ent-container">
        <p className="ent-label">Unsere Leistungen</p>
        <h2 className="ent-titel">Was wir mitbringen</h2>

        <div className="ent-c-split">
          <div className="ent-c-buehne">
            <div className="ent-c-rahmen">
              {l.bild ? (
                <Image key={l.bild} src={l.bild} alt={l.alt ?? ''} width={900} height={1100}
                       sizes="(max-width: 900px) 100vw, 500px" quality={62}
                       style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: l.pos ?? 'center' }} />
              ) : (
                <p className="ent-c-ersatz">{l.titel}</p>
              )}
            </div>
          </div>

          <ol className="ent-c-liste">
            {LEISTUNGEN.map((eintrag, i) => (
              <li
                key={eintrag.titel}
                ref={(el) => { zeilen.current[i] = el }}
                className={`ent-c-eintrag${aktiv === i ? ' ist-aktiv' : ''}`}
              >
                <span className="ent-c-nr">{String(i + 1).padStart(2, '0')}</span>
                <h3>{eintrag.titel}</h3>
                <p>{eintrag.zeile}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
