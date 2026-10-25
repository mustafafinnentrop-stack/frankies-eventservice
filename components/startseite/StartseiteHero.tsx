'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/*
  Der Einstieg. Links die drei Titelzeilen, rechts das Mannschaftsfoto.

  Umbau 25.10.2026 nach Vorgabe des Betreibers: Nutzen zuerst ("Sie
  feiern. Wir machen den Rest."), ein goldener Angebots-Knopf, und im
  Klartext rotiert der Anlass ("Ihr Schuetzenfest / Ihre Hochzeit ...").
  Die Rotation steht bei Bewegungswunsch "reduziert" still.

  Der Einstieg selbst laeuft ueber CSS-Keyframes (siehe startseite.css):
  Titelzeilen fahren aus einer verdeckten Zeile hoch, das Foto wird von
  unten aufgedeckt, der Absatz blendet nach. Das braucht kein JavaScript
  und flackert nicht, weil der Startzustand schon im Stylesheet steht.

  Nur der leichte Zoom des Fotos beim Scrollen kommt von GSAP — und nur
  auf breiten Bildschirmen, auf dem Handy scrollt das Foto einfach mit.
*/
const ANLAESSE = ['Ihr Schützenfest', 'Ihre Hochzeit', 'Ihre Firmenfeier', 'Ihr Vereinsfest']

export default function StartseiteHero() {
  const heroRef = useRef<HTMLElement>(null)
  const fensterRef = useRef<HTMLDivElement>(null)
  const [anlass, setAnlass] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const takt = window.setInterval(() => setAnlass((a) => (a + 1) % ANLAESSE.length), 2600)
    return () => window.clearInterval(takt)
  }, [])

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
          <span className="sn-line"><span>Sie feiern.</span></span>
          <span className="sn-line"><span>Wir machen</span></span>
          <span className="sn-line sn-line-gold"><span><em>den Rest.</em></span></span>
        </h1>
        <div className="sn-hero-bottom sn-intro">
          <p className="sn-hero-klartext">
            Getränke, Theke und Personal aus einer Hand — für{' '}
            <span className="sn-rotwort"><span key={anlass} className="sn-rotwort-wort">{ANLAESSE[anlass]}</span></span>.
          </p>
          <p>Wir liefern, zapfen, mixen und räumen wieder ab. Damit Sie bei Ihrem eigenen Fest dabei sein können.</p>
          <ul className="sn-chips" aria-label="Typische Anlässe">
            <li><Link href="/getraenkeservice-schuetzenfest">Schützenfest</Link></li>
            <li><Link href="/hochzeit-sauerland">Hochzeit</Link></li>
            <li><Link href="/eventservice-kreis-olpe">Firmenfeier</Link></li>
            <li><a href="#leistungen">Vereinsfest</a></li>
          </ul>
          <div className="sn-hero-cta">
            <a className="sn-submit sn-hero-angebot" href="#anfrage">Angebot anfordern <span aria-hidden="true">↗</span></a>
            <a className="sn-link" href="#warum">Warum Frankies? <span aria-hidden="true">↓</span></a>
          </div>
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
            quality={60}
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
