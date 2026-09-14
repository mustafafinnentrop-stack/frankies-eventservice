'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/*
  Der Einstieg. Links die drei Titelzeilen, rechts das Mannschaftsfoto.

  Der Einstieg selbst laeuft ueber CSS-Keyframes (siehe startseite.css):
  Titelzeilen fahren aus einer verdeckten Zeile hoch, das Foto wird von
  unten aufgedeckt, der Absatz blendet nach. Das braucht kein JavaScript
  und flackert nicht, weil der Startzustand schon im Stylesheet steht.

  Nur der leichte Zoom des Fotos beim Scrollen kommt von GSAP — und nur
  auf breiten Bildschirmen, auf dem Handy scrollt das Foto einfach mit.
*/
export default function StartseiteHero() {
  const heroRef = useRef<HTMLElement>(null)
  const fensterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.innerWidth <= 560) return
    const bild = fensterRef.current?.querySelector('img')
    if (!bild || !heroRef.current) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.to(bild, {
        scale: 1.045,
        y: 9,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="sn-hero" id="start" aria-labelledby="sn-hero-titel" ref={heroRef}>
      <div className="sn-hero-copy">
        <p className="sn-eyebrow sn-intro">Aus Lennestadt. Mittendrin.</p>
        <h1 id="sn-hero-titel">
          <span className="sn-line"><span>Ihr Fest.</span></span>
          <span className="sn-line"><span>Unsere</span></span>
          <span className="sn-line sn-line-gold"><span><em>Mannschaft.</em></span></span>
        </h1>
        <div className="sn-hero-bottom sn-intro">
          <p>Wir übernehmen Theke, Getränke und Service. Damit Sie bei Ihrem eigenen Fest dabei sein können.</p>
          <a className="sn-link" href="#mannschaft">Lernen Sie uns kennen <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <figure className="sn-portrait">
        <div className="sn-portrait-window" ref={fensterRef}>
          <Image
            src="/team.webp"
            alt="Die Mannschaft von Frankies Eventservice gemeinsam hinter der Theke"
            width={1200}
            height={1500}
            priority
            sizes="(max-width: 560px) 100vw, 50vw"
          />
          <div className="sn-portrait-shade" />
          <span className="sn-corner sn-corner-tl" aria-hidden="true" />
          <span className="sn-corner sn-corner-br" aria-hidden="true" />
          <span className="sn-portrait-caption">Die Menschen hinter Frankies</span>
        </div>
        <figcaption>
          <span>Getränke- &amp; Thekenservice</span>
          <span>Lennestadt · Sauerland</span>
        </figcaption>
      </figure>

      <div className="sn-hero-foot">
        <span>Schützenfest, Hochzeit oder Firmenfeier.</span>
        <a href="#leistungen">Wir bringen mit, was Ihr Fest braucht. <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  )
}
