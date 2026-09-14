'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

/*
  05 / Ihr Fest. Telefon, E-Mail, Erstgespraech — und ein kurzes Formular,
  das ueber Web3Forms an das Postfach geht, genau wie das bisherige
  Kontaktformular. Nach dem Absenden stossen die Glaeser an (Lottie);
  der Motor dafuer wird erst dann geladen, nicht mit der Seite.

  Pflicht sind nur Anlass, Name und E-Mail. Alles andere hilft beim
  Angebot, ist aber keine Huerde.
*/
const LottieBox = dynamic(() => import('@/components/LottieBox'), { ssr: false })

const CALCOM_URL = process.env.NEXT_PUBLIC_CALCOM_URL || 'https://cal.com/frankies.digital/15min'
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

const ANLAESSE = ['Schützenfest', 'Hochzeit', 'Firmenfeier', 'Geburtstag', 'Vereinsfest', 'Karneval', 'Mobile Cocktailbar', 'Equipment mieten', 'Sonstige Veranstaltung']
const GAESTE = ['bis 50', '50–100', '100–200', '200–500', 'über 500']

type Felder = { anlass: string; datum: string; gaeste: string; ort: string; nachricht: string; name: string; email: string; telefon: string }

export default function Anfrage() {
  const [f, setF] = useState<Felder>({ anlass: '', datum: '', gaeste: '', ort: '', nachricht: '', name: '', email: '', telefon: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [hinweis, setHinweis] = useState('')

  const set = (k: keyof Felder) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((alt) => ({ ...alt, [k]: e.target.value }))

  async function senden(e: React.FormEvent) {
    e.preventDefault()
    if (!f.anlass || !f.name.trim() || !f.email.includes('@')) {
      setHinweis('Bitte Anlass, Name und eine gültige E-Mail-Adresse angeben.')
      return
    }
    setHinweis('')
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Anfrage: ${f.anlass} — ${f.name}`,
          from_name: 'Frankies Eventservice Website',
          Name: f.name,
          'E-Mail': f.email,
          Telefon: f.telefon || '–',
          Veranstaltung: f.anlass,
          Datum: f.datum || '–',
          Gäste: f.gaeste || '–',
          Ort: f.ort || '–',
          Nachricht: f.nachricht || '–',
        }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const calUrl = `${CALCOM_URL}?name=${encodeURIComponent(f.name)}&email=${encodeURIComponent(f.email)}`

  return (
    <section className="sn-anfrage" id="anfrage" aria-labelledby="sn-anfrage-titel">
      <div className="sn-wrap">
        <div className="sn-top sn-reveal">
          <span className="sn-eyebrow">05 / Ihr Fest</span>
          <span className="sn-note">Lennestadt · Kreis Olpe · Sauerland</span>
        </div>
        <div className="sn-anfrage-layout" id="kontakt">
          <div className="sn-anfrage-copy sn-reveal">
            <h2 id="sn-anfrage-titel">Wann dürfen<br />wir <em>mit anpacken?</em></h2>
            <p>Erzählen Sie uns kurz von Ihrem Fest.<br />Den Rest besprechen wir persönlich.</p>
            <a className="sn-phone" href="tel:+4915142840916">0151 42840916 <span aria-hidden="true">↗</span></a>
            <a className="sn-email" href="mailto:info@frankies-eventservice.de">info@frankies-eventservice.de</a>
            <a className="sn-link" href={CALCOM_URL} target="_blank" rel="noopener noreferrer">Kostenloses Erstgespräch <span aria-hidden="true">↗</span></a>
          </div>

          {status === 'done' ? (
            <div className="sn-erfolg sn-reveal is-visible">
              <LottieBox name="anstossen" groesse={150} />
              <h3>Vielen Dank!</h3>
              <p>Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden.</p>
              <a className="sn-link" href={calUrl} target="_blank" rel="noopener noreferrer">Erstgespräch vereinbaren <span aria-hidden="true">↗</span></a>
            </div>
          ) : (
            <form className="sn-form sn-reveal" onSubmit={senden} noValidate>
              <div className="sn-field full">
                <label htmlFor="sn-anlass">Was haben Sie vor? *</label>
                <select id="sn-anlass" value={f.anlass} onChange={set('anlass')} required>
                  <option value="" disabled>Bitte wählen</option>
                  {ANLAESSE.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              <div className="sn-field">
                <label htmlFor="sn-datum">Wann?</label>
                <input type="date" id="sn-datum" value={f.datum} onChange={set('datum')} min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="sn-field">
                <label htmlFor="sn-gaeste">Wie viele Gäste ungefähr?</label>
                <select id="sn-gaeste" value={f.gaeste} onChange={set('gaeste')}>
                  <option value="" disabled>Bitte wählen</option>
                  {GAESTE.map((g) => <option key={g} value={g}>{g} Gäste</option>)}
                </select>
              </div>
              <div className="sn-field full">
                <label htmlFor="sn-ort">Wo wird gefeiert?</label>
                <input id="sn-ort" value={f.ort} onChange={set('ort')} autoComplete="address-level2" placeholder="Ort oder Location" />
              </div>
              <div className="sn-field full">
                <label htmlFor="sn-nachricht">Was sollen wir übernehmen?</label>
                <textarea id="sn-nachricht" value={f.nachricht} onChange={set('nachricht')} rows={2} placeholder="z. B. Getränke und Service von 17 bis 1 Uhr" />
              </div>
              <div className="sn-field">
                <label htmlFor="sn-name">Ihr Name *</label>
                <input id="sn-name" value={f.name} onChange={set('name')} autoComplete="name" placeholder="Vor- und Nachname" required />
              </div>
              <div className="sn-field">
                <label htmlFor="sn-email">E-Mail *</label>
                <input type="email" id="sn-email" value={f.email} onChange={set('email')} autoComplete="email" placeholder="ihre@email.de" required />
              </div>
              <div className="sn-field full">
                <label htmlFor="sn-telefon">Telefon</label>
                <input type="tel" id="sn-telefon" value={f.telefon} onChange={set('telefon')} autoComplete="tel" placeholder="Für Rückfragen" />
              </div>
              {hinweis && <p className="sn-form-fehler" role="alert">{hinweis}</p>}
              {status === 'error' && (
                <p className="sn-form-fehler" role="alert">Das hat nicht geklappt. Rufen Sie uns an: <a href="tel:+4915142840916" style={{ color: 'var(--color-gold)' }}>0151 42840916</a></p>
              )}
              <button className="sn-submit" type="submit" disabled={status === 'sending'}>
                <span>{status === 'sending' ? 'Wird gesendet …' : 'Anfrage senden'}</span>
                <span aria-hidden="true">↗</span>
              </button>
              <p className="sn-form-note" role="status">* Pflichtfelder. Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
