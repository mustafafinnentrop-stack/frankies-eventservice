'use client'

import { useState } from 'react'

/*
  Partner-Anfrage. Gleicher Versandweg und dieselben Formular-Klassen wie
  das Kontaktformular (Web3Forms, .contact-form) — kein zweites
  Formularsystem auf der Seite.
*/
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

const ARTEN = [
  'Eventlocation / Gastronomie',
  'Verein / Festausschuss',
  'Eventdienstleister (DJ, Fotograf, Verleih …)',
  'Privat empfehlen',
  'Sonstiges',
]

interface FormData {
  fname: string; lname: string; email: string; phone: string
  firma: string; art: string; message: string
}

export default function PartnerForm() {
  const [form, setForm] = useState<FormData>({
    fname: '', lname: '', email: '', phone: '', firma: '', art: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.fname || !form.lname || !form.email || !form.art) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.')
      return
    }
    if (!form.email.includes('@') || !form.email.includes('.')) {
      alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Partner-Anfrage: ${form.art} — ${form.fname} ${form.lname}`,
          from_name: 'Frankies Eventservice Website (Partnerseite)',
          'Name': `${form.fname} ${form.lname}`,
          'E-Mail': form.email,
          'Telefon': form.phone || '–',
          'Unternehmen/Verein': form.firma || '–',
          'Art der Partnerschaft': form.art,
          'Nachricht': form.message || '–',
        }),
      })
      if (res.ok) setStatus('done')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="form-success" style={{ display: 'block' }}>
        <h3>Vielen Dank!</h3>
        <p>Ihre Partner-Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden.</p>
      </div>
    )
  }

  return (
    <div className="contact-form reveal">
      <div className="form-row-double">
        <div className="form-row">
          <label htmlFor="p-fname">Vorname *</label>
          <input type="text" id="p-fname" value={form.fname} onChange={update('fname')} placeholder="Ihr Vorname" required />
        </div>
        <div className="form-row">
          <label htmlFor="p-lname">Nachname *</label>
          <input type="text" id="p-lname" value={form.lname} onChange={update('lname')} placeholder="Ihr Nachname" required />
        </div>
      </div>
      <div className="form-row-double">
        <div className="form-row">
          <label htmlFor="p-email">E-Mail *</label>
          <input type="email" id="p-email" value={form.email} onChange={update('email')} placeholder="ihre@email.de" required />
        </div>
        <div className="form-row">
          <label htmlFor="p-phone">Telefon</label>
          <input type="tel" id="p-phone" value={form.phone} onChange={update('phone')} placeholder="Ihre Telefonnummer" />
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="p-firma">Unternehmen / Verein / Location</label>
        <input type="text" id="p-firma" value={form.firma} onChange={update('firma')} placeholder="Optional" />
      </div>
      <div className="form-row">
        <label htmlFor="p-art">Art der Partnerschaft *</label>
        <select id="p-art" value={form.art} onChange={update('art')} required>
          <option value="" disabled>Bitte wählen...</option>
          {ARTEN.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="p-message">Erzählen Sie kurz, wie eine Zusammenarbeit aussehen könnte</label>
        <textarea id="p-message" rows={4} value={form.message} onChange={update('message')} placeholder="Optional" />
      </div>

      {status === 'error' && (
        <p style={{ color: '#e07070', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
          Fehler beim Senden. Bitte rufen Sie uns direkt an: <a href="tel:+4915142840916" style={{ color: 'var(--color-gold)' }}>0151 42840916</a>
        </p>
      )}

      <button type="button" className="form-submit" onClick={handleSubmit} disabled={status === 'sending'}>
        {status === 'sending' ? 'Wird gesendet...' : 'Partner-Anfrage senden'}
      </button>
      <p className="form-hint">* Pflichtfelder. Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet.</p>
    </div>
  )
}
