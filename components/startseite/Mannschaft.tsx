'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/*
  01 / Die Mannschaft. Kern der Sektion ist die Scroll-Buehne: Sie bleibt
  auf breiten Bildschirmen eine Viewport-Hoehe lang stehen, waehrend zwei
  gedrehte Fotos gegenlaeufig wandern, das grosse Wort dahinter leicht
  zieht und die goldene Linie mitwaechst — alles an den Scrollweg gekoppelt,
  nicht an eine Uhr. Wer aufhoert zu scrollen, haelt die Bewegung an.

  Auf dem Handy ist die Buehne nicht fixiert (eine 100vh-Sperre waere dort
  eine Falle), die Fotos bewegen sich nur leicht, waehrend sie durchs Bild
  laufen.
*/
export default function Mannschaft() {
  const seqRef = useRef<HTMLDivElement>(null)
  const aRef = useRef<HTMLElement>(null)
  const bRef = useRef<HTMLElement>(null)
  const wortRef = useRef<HTMLDivElement>(null)
  const linieRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)
    const mobil = window.innerWidth <= 560
    const hub = mobil ? 28 : 80
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: seqRef.current,
          start: mobil ? 'top bottom' : 'top top',
          end: mobil ? 'bottom top' : 'bottom bottom',
          scrub: 0.6,
        },
      })
      tl.fromTo(aRef.current, { y: hub / 2, rotation: -5 }, { y: -hub / 2, rotation: 1, ease: 'none' }, 0)
        .fromTo(bRef.current, { y: -hub / 2, rotation: 5 }, { y: hub / 2, rotation: -1, ease: 'none' }, 0)
        .fromTo(wortRef.current, { xPercent: -54 }, { xPercent: -46, ease: 'none' }, 0)
        .fromTo(linieRef.current, { scaleX: 0.08 }, { scaleX: 1, ease: 'none' }, 0)
    }, seqRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="sn-mannschaft" id="mannschaft" aria-labelledby="sn-mannschaft-titel">
      <div className="sn-top sn-reveal">
        <span className="sn-eyebrow">01 / Die Mannschaft</span>
        <span className="sn-note">Vom Aufbau bis zum letzten Glas.</span>
      </div>

      <div className="sn-intro-grid sn-reveal">
        <h2 id="sn-mannschaft-titel">Wenn es voll wird,<br />zählt das <em>Zusammenspiel.</em></h2>
        <div>
          <p>Vorne werden Getränke bestellt. Hinten müssen Gläser, Eis und Nachschub bereitstehen. Wir teilen die Arbeit auf und behalten den Ablauf im Blick.</p>
          <p>Frankies kommt aus Lennestadt — und je nach Fest mit bis zu zwanzig Leuten, die Ihre Veranstaltung am Laufen halten.</p>
        </div>
      </div>

      <div className="sn-seq" ref={seqRef}>
        <div className="sn-stage">
          <div className="sn-word" aria-hidden="true" ref={wortRef}>ZUSAMMEN.</div>
          <figure className="sn-frame sn-frame-a" ref={aRef}>
            <Image src="/schuetzenfest.webp" alt="Eine Mitarbeiterin stellt frisch gezapftes Bier für den Service zusammen" width={1200} height={1500} sizes="(max-width: 560px) 51vw, 34vw" />
            <figcaption>Am Gast.</figcaption>
          </figure>
          <figure className="sn-frame sn-frame-b" ref={bRef}>
            <Image src="/glaeser.webp" alt="Zwei Mitarbeiter bereiten gemeinsam die Gläser an der Theke vor" width={1200} height={1500} sizes="(max-width: 560px) 51vw, 34vw" />
            <figcaption>Hinter der Theke.</figcaption>
          </figure>
          <p className="sn-stage-caption">Ein Handgriff greift in den nächsten.</p>
          <div className="sn-rule" aria-hidden="true"><span ref={linieRef} /></div>
        </div>
      </div>

      {/* Der Mensch hinter der Mannschaft. Nur, was belegt ist: Inhaber,
          Lennestadt, am Veranstaltungstag selbst dabei (so beschreiben es
          die Google-Bewertungen), Angebot innerhalb von 24 Stunden. */}
      <div className="sn-owner sn-reveal">
        <p>Ihr Ansprechpartner vom ersten Gespräch bis zum Abbau.</p>
        <div>
          <span className="sn-owner-name">Mustafa Yildirim</span>
          <span className="sn-owner-role">Inhaber · Frankies Eventservice · Lennestadt</span>
          <p className="sn-owner-text">Plant Ihr Fest mit Ihnen durch und steht am Tag selbst mit im Einsatz. Auf jede Anfrage antwortet er innerhalb von 24 Stunden — mit einem Angebot, nicht mit einer Warteschleife.</p>
        </div>
        <div className="sn-owner-links">
          <a className="sn-link" href="tel:+4915142840916">Direkt anrufen <span aria-hidden="true">↗</span></a>
          <a className="sn-link" href="mailto:info@frankies-eventservice.de">E-Mail schreiben <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
