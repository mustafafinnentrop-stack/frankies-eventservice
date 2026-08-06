'use client'

import React from 'react'
import { LazyMotion, domAnimation, m } from 'motion/react'

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
)

const steps = [
  {
    title: 'Anfrage',
    description:
      'Sie kontaktieren uns mit Datum, Ort und Art der Veranstaltung. Wir melden uns innerhalb von 24 Stunden zurück.',
  },
  {
    title: 'Planung',
    description:
      'Gemeinsam besprechen wir Umfang und Personalgröße. Alle Details werden vorab geklärt, damit der Ablauf sitzt.',
  },
  {
    title: 'Durchführung',
    description:
      'Am Veranstaltungstag ist unser Team pünktlich vor Ort, baut auf und übernimmt den kompletten Getränkeservice.',
  },
  {
    title: 'Abschluss',
    description:
      'Nach der Veranstaltung räumen wir auf und hinterlassen den Ort ordentlich — ohne Mehraufwand für Sie.',
  },
]

// Positionen und Drehung je Karte (greifen erst ab 768px, siehe CSS)
const positions = [
  { className: 'hiw-pos-1', rotate: '8deg' },
  { className: 'hiw-pos-2', rotate: '-8deg' },
  { className: 'hiw-pos-3', rotate: '8deg' },
  { className: 'hiw-pos-4', rotate: '-8deg' },
]

const HEIGHT = 900

// Verbindungskurve zwischen den Kartenpositionen, auf vier Karten abgestimmt
const PATH =
  'M 290 150 C 500 150, 550 270, 710 270' +
  ' C 850 270, 500 350, 290 450' +
  ' C 290 600, 550 720, 750 720'

export default function Ablauf() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="ablauf">
        <div className="section-container">
          <div className="reveal" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <p className="section-label">So arbeiten wir</p>
            <h2 className="section-title" style={{ margin: '0 auto' }}>
              In vier Schritten<br />zu Ihrem Event
            </h2>
          </div>

          <div className="hiw" style={{ ['--hiw-h' as string]: `${HEIGHT}px` }}>
            <svg
              className="hiw-path"
              viewBox={`0 0 1000 ${HEIGHT}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <m.path
                d={PATH}
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 6"
                fill="none"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -140 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </svg>

            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`hiw-card ${positions[i].className}`}
                style={{ ['--hiw-rotate' as string]: positions[i].rotate }}
              >
                <div className="hiw-card-outer">
                  <Pin className="hiw-pin" />
                  <div className="hiw-card-inner">
                    <span className="hiw-num">{`0${i + 1}`}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}
