'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { LEISTUNGSWAHL, type Leistung } from './vorwahl'
import { MAX, HONEYPOT_STIL, gesperrt, sperren } from '@/components/formular-schutz'
import { GAESTE, ANFRAGE_LEER, CALCOM_URL, anfrageSenden, kontaktGueltig, type AnfrageFelder } from './anfrage-daten'
import { FUNNEL, type FunnelArt } from './funnel-varianten'

/*
  /kontakt: die Anfrage in drei Schritten (11.11.2026, Wunsch des Betreibers).

  Dieselben Fragen wie im Formular der Startseite, nur aufgeteilt:
    1. Anlass      — ein Antippen, danach geht es von selbst weiter
    2. Eckdaten    — Datum, Gaeste, Ort, Leistungen (alles freiwillig)
    3. Kontakt     — Name, E-Mail (Pflicht), Telefon, Nachricht

  Aufbau nach dem, was sich bei Anfrage-Strecken bewaehrt hat: leichte
  Frage zuerst, Kontaktdaten zuletzt, sichtbarer Fortschritt, jederzeit
  zurueck. Versand und Feldnamen kommen aus anfrage-daten.ts, es gibt
  keine zweite Versandlogik.

  Bewusst ohne Auto-Weiter bei Tastaturbedienung: Schritt 1 sind Knoepfe,
  kein Radio-Feld, sonst wuerde jede Pfeiltaste weiterspringen.

  Seit 12.11.2026 gibt es die Strecke in drei Fassungen (allgemein,
  Winterbar, Cocktailbar). Was sich unterscheidet, steht in
  funnel-varianten.tsx: Ueberschrift, Anlaesse und die letzte Frage in
  Schritt 2. Alles andere ist hier fuer alle drei dasselbe.
*/
const LottieBox = dynamic(() => import('@/components/LottieBox'), { ssr: false })

const TITEL = ['Was haben Sie vor?', 'Ein paar Eckdaten', 'Wohin dürfen wir das Angebot schicken?']
const UNTER = [
  'Tippen Sie an, was am besten passt.',
  'Alles freiwillig. Je mehr wir wissen, desto genauer wird das Angebot.',
  'Wir melden uns innerhalb von 24 Stunden.',
]

const datumDe = (iso: string) => {
  const [j, m, t] = iso.split('-')
  return j && m && t ? `${t}.${m}.${j}` : ''
}

export default function AnfrageFunnel({ art = 'allgemein' }: { art?: FunnelArt }) {
  const v = FUNNEL[art]
  const [f, setF] = useState<AnfrageFelder>(ANFRAGE_LEER)
  /* Antwort auf die letzte Frage in Schritt 2 (Karte oder Paket). */
  const [wahl, setWahl] = useState('')
  const [schritt, setSchritt] = useState(1)
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [hinweis, setHinweis] = useState('')
  const [falle, setFalle] = useState(false)
  const kasten = useRef<HTMLDivElement>(null)
  const titel = useRef<HTMLHeadingElement>(null)
  const ersterLauf = useRef(true)

  /* Vorauswahl ueber die Adresse, wie auf der Startseite: nur der feste
     Wert "winterbar", nichts Freies aus der URL landet im Formular. */
  useEffect(() => {
    const adresse = new URLSearchParams(window.location.search)
    if (!v.wahl && adresse.get('leistung') === 'winterbar') {
      setF((alt) => ({ ...alt, leistungen: ['Winterbar'] }))
    }
    /* Vorauswahl der letzten Frage, z. B. /kontakt/cocktailbar?paket=100.
       Uebernommen wird nur ein Wert aus der festen Liste der Fassung. */
    const gewuenscht = v.wahl?.parameter ? adresse.get(v.wahl.parameter) : null
    const bekannt = gewuenscht ? v.wahl?.vorwahl?.[gewuenscht] : undefined
    if (bekannt) setWahl(bekannt)
  }, [v])

  /* Beim Schrittwechsel: Kasten in den Blick holen (der feste Header
     verdeckt sonst den Anfang) und den Titel fokussieren, damit
     Screenreader den neuen Schritt ansagen. Nicht beim ersten Laden. */
  useEffect(() => {
    if (ersterLauf.current) { ersterLauf.current = false; return }
    const el = kasten.current
    if (el) {
      const oben = el.getBoundingClientRect().top
      if (oben < 96 || oben > window.innerHeight * 0.6) {
        const ruhig = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        el.scrollIntoView({ behavior: ruhig ? 'auto' : 'smooth', block: 'start' })
      }
    }
    titel.current?.focus({ preventScroll: true })
  }, [schritt, status])

  const set = (k: keyof AnfrageFelder) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((alt) => ({ ...alt, [k]: e.target.value }))
  const umschalten = (l: Leistung) => () =>
    setF((alt) => ({ ...alt, leistungen: alt.leistungen.includes(l) ? alt.leistungen.filter((x) => x !== l) : [...alt.leistungen, l] }))
  const gehe = (n: number) => { setHinweis(''); setSchritt(n) }
  const anlassWaehlen = (a: string) => () => { setF((alt) => ({ ...alt, anlass: a })); gehe(2) }

  async function senden(e: React.FormEvent) {
    e.preventDefault()
    /* Enter in einem Textfeld von Schritt 2 soll weiterblaettern, nicht senden. */
    if (schritt < 3) { if (f.anlass) gehe(schritt + 1); return }
    if (!f.anlass) { gehe(1); return }
    if (!kontaktGueltig(f)) {
      setHinweis('Bitte Name und eine gültige E-Mail-Adresse angeben.')
      return
    }
    if (falle) { setStatus('done'); return }
    if (gesperrt('fe-anfrage')) {
      setHinweis('Ihre Anfrage ist bereits unterwegs. Bitte einen Moment warten.')
      return
    }
    setHinweis('')
    setStatus('sending')
    /* Bei Winterbar und Cocktailbar steht die Leistung fest; die Antwort
       auf die letzte Frage geht als eigene Zeile in die Mail. */
    const felder = v.leistung ? { ...f, leistungen: [v.leistung] } : f
    const zeilen = v.wahl && wahl ? { [v.wahl.feld]: wahl } : undefined
    const ok = await anfrageSenden(felder, { formular: v.formular, zeilen })
    if (ok) sperren('fe-anfrage')
    setStatus(ok ? 'done' : 'error')
  }

  const calUrl = `${CALCOM_URL}?name=${encodeURIComponent(f.name)}&email=${encodeURIComponent(f.email)}`
  const kurz = [f.anlass, datumDe(f.datum), f.gaeste && `${f.gaeste} Gäste`, f.ort.trim(), wahl].filter(Boolean).join(' · ')

  return (
    <section className="sn-anfrage sn-anfrage-seite" id="anfrage" aria-labelledby="sn-anfrage-titel">
      <div className="sn-wrap">
        <div className="sn-top sn-reveal">
          <span className="sn-eyebrow">{v.eyebrow}</span>
          <span className="sn-note">{v.note}</span>
        </div>
        <div className="sn-kontakt-layout">
          <div className="sn-anfrage-copy sn-kontakt-kopf sn-reveal">
            <h1 id="sn-anfrage-titel" className="sn-h1">{v.h1}</h1>
            <p>{v.lead}</p>
          </div>

          <div className="sn-funnel sn-reveal" ref={kasten}>
            {status === 'done' ? (
              <div className="sn-erfolg">
                <LottieBox name="anstossen" groesse={150} />
                <h2 ref={titel} tabIndex={-1} className="sn-funnel-titel">Vielen Dank!</h2>
                <p>Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden.</p>
                <a className="sn-link" href={calUrl} target="_blank" rel="noopener noreferrer">Erstgespräch vereinbaren <span aria-hidden="true">↗</span></a>
              </div>
            ) : (
              <form onSubmit={senden} noValidate>
                {/* Honeypot — siehe components/formular-schutz.ts */}
                <div style={HONEYPOT_STIL} aria-hidden="true">
                  <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" checked={falle} onChange={(e) => setFalle(e.target.checked)} />
                </div>

                <div className="sn-funnel-kopf">
                  <span className="sn-funnel-zaehler">Schritt {schritt} von 3</span>
                  <div className="sn-funnel-balken" role="progressbar" aria-label="Fortschritt der Anfrage" aria-valuemin={1} aria-valuemax={3} aria-valuenow={schritt}>
                    <span style={{ width: `${(schritt / 3) * 100}%` }} />
                  </div>
                </div>
                <h2 ref={titel} tabIndex={-1} className="sn-funnel-titel">{TITEL[schritt - 1]}</h2>
                <p className="sn-funnel-unter">{UNTER[schritt - 1]}</p>

                {schritt === 1 && (
                  <div className={v.lang ? 'sn-funnel-optionen sn-funnel-optionen--lang' : 'sn-funnel-optionen'} role="group" aria-label="Anlass">
                    {v.anlaesse.map((a) => {
                      /* Angezeigt wird mit weicher Trennstelle, gemerkt und
                         verschickt ohne. */
                      const wert = a.replace(/\u00AD/g, '')
                      return (
                        <button key={wert} type="button" className={f.anlass === wert ? 'is-on' : undefined} aria-pressed={f.anlass === wert} onClick={anlassWaehlen(wert)}>
                          <span>{a}</span>
                          <span aria-hidden="true">→</span>
                        </button>
                      )
                    })}
                  </div>
                )}

                {schritt === 2 && (
                  <div className="sn-form">
                    <div className="sn-field">
                      <label htmlFor="kf-datum">Wann?</label>
                      <input type="date" id="kf-datum" value={f.datum} onChange={set('datum')} min={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="sn-field">
                      <label htmlFor="kf-ort">Wo wird gefeiert?</label>
                      <input id="kf-ort" value={f.ort} onChange={set('ort')} autoComplete="address-level2" placeholder="Ort oder Location" maxLength={MAX.ort} />
                    </div>
                    <fieldset className="sn-field full sn-wahl">
                      <legend>Wie viele Gäste ungefähr?</legend>
                      <div className="sn-wahl-liste">
                        {GAESTE.map((g) => (
                          <label key={g} className={f.gaeste === g ? 'is-on' : undefined}>
                            <input type="radio" name="gaeste" value={g} checked={f.gaeste === g} onChange={set('gaeste')} />
                            <span>{g}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                    {v.wahl ? (
                      <fieldset className="sn-field full sn-wahl">
                        <legend>{v.wahl.legende}</legend>
                        <div className="sn-wahl-liste">
                          {v.wahl.optionen.map((o) => (
                            <label key={o.wert} className={wahl === o.wert ? 'is-on' : undefined}>
                              <input type="radio" name="wahl" value={o.wert} checked={wahl === o.wert} onChange={() => setWahl(o.wert)} />
                              <span>{o.text}</span>
                            </label>
                          ))}
                        </div>
                        {v.wahl.hinweis && <p className="sn-funnel-hinweis">{v.wahl.hinweis}</p>}
                      </fieldset>
                    ) : (
                      <fieldset className="sn-field full sn-wahl">
                        <legend>Was sollen wir übernehmen?</legend>
                        <div className="sn-wahl-liste">
                          {LEISTUNGSWAHL.map((l) => (
                            <label key={l} className={f.leistungen.includes(l) ? 'is-on' : undefined}>
                              <input type="checkbox" name="leistungen" value={l} checked={f.leistungen.includes(l)} onChange={umschalten(l)} />
                              <span>{l}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    )}
                  </div>
                )}

                {schritt === 3 && (
                  <div className="sn-form">
                    {kurz && (
                      <p className="sn-funnel-kurz">
                        <span>Ihre Anfrage:</span> {kurz}
                      </p>
                    )}
                    <div className="sn-field">
                      <label htmlFor="kf-name">Ihr Name *</label>
                      <input id="kf-name" value={f.name} onChange={set('name')} autoComplete="name" placeholder="Vor- und Nachname" maxLength={MAX.name} required />
                    </div>
                    <div className="sn-field">
                      <label htmlFor="kf-email">E-Mail *</label>
                      <input type="email" id="kf-email" value={f.email} onChange={set('email')} autoComplete="email" placeholder="ihre@email.de" maxLength={MAX.email} required />
                    </div>
                    <div className="sn-field full">
                      <label htmlFor="kf-telefon">Telefon</label>
                      <input type="tel" id="kf-telefon" value={f.telefon} onChange={set('telefon')} autoComplete="tel" placeholder="Für Rückfragen" maxLength={MAX.telefon} />
                    </div>
                    <div className="sn-field full">
                      <label htmlFor="kf-nachricht">Sonst noch etwas?</label>
                      <textarea id="kf-nachricht" value={f.nachricht} onChange={set('nachricht')} rows={2} placeholder={v.nachrichtBeispiel} maxLength={MAX.nachricht} />
                    </div>
                  </div>
                )}

                {hinweis && <p className="sn-form-fehler" role="alert">{hinweis}</p>}
                {status === 'error' && (
                  <p className="sn-form-fehler" role="alert">Das hat nicht geklappt. Rufen Sie uns an: <a href="tel:+4915142840916" style={{ color: 'var(--color-gold)' }}>0151 42840916</a></p>
                )}

                {schritt > 1 && (
                  <div className="sn-funnel-nav">
                    <button type="button" className="sn-funnel-zurueck" onClick={() => gehe(schritt - 1)}>
                      <span aria-hidden="true">←</span> Zurück
                    </button>
                    {/* Eigene keys: Ohne sie verwendet React denselben Knopf weiter
                        und stellt ihn mitten im Klick von "button" auf "submit"
                        um — "Weiter" wuerde das Formular dann sofort absenden. */}
                    {schritt === 2 ? (
                      <button key="weiter" type="button" className="sn-submit" onClick={() => gehe(3)}>
                        <span>Weiter</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    ) : (
                      <button key="senden" className="sn-submit" type="submit" disabled={status === 'sending'}>
                        <span>{status === 'sending' ? 'Wird gesendet …' : 'Anfrage senden'}</span>
                        <span aria-hidden="true">↗</span>
                      </button>
                    )}
                  </div>
                )}
                {schritt === 3 && (
                  <p className="sn-form-note" role="status">* Pflichtfelder. Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet.</p>
                )}
              </form>
            )}
          </div>

          <div className="sn-anfrage-copy sn-kontakt-direkt sn-reveal">
            <p>Lieber direkt sprechen?</p>
            <a className="sn-phone" href="tel:+4915142840916">0151 42840916 <span aria-hidden="true">↗</span></a>
            <a className="sn-email" href="mailto:info@frankies-eventservice.de">info@frankies-eventservice.de</a>
            <a className="sn-link" href={CALCOM_URL} target="_blank" rel="noopener noreferrer">Kostenloses Erstgespräch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
