'use client'

import { useState } from 'react'

interface FormData {
  fname: string; lname: string; email: string; phone: string
  eventtype: string; eventdate: string; guests: string; location: string; message: string
}

const CALCOM_URL = process.env.NEXT_PUBLIC_CALCOM_URL || 'https://cal.com/frankies.digital/15min'
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

export default function Kontakt() {
  const [form, setForm] = useState<FormData>({
    fname: '', lname: '', email: '', phone: '',
    eventtype: '', eventdate: '', guests: '', location: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.fname || !form.lname || !form.email || !form.eventtype) {
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
          subject: `Anfrage: ${form.eventtype} — ${form.fname} ${form.lname}`,
          from_name: 'Frankies Eventservice Website',
          'Name': `${form.fname} ${form.lname}`,
          'E-Mail': form.email,
          'Telefon': form.phone || '–',
          'Veranstaltung': form.eventtype,
          'Datum': form.eventdate || '–',
          'Gäste': form.guests || '–',
          'Ort': form.location || '–',
          'Nachricht': form.message || '–',
        }),
      })
      if (res.ok) setStatus('done')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const calUrl = `${CALCOM_URL}?name=${encodeURIComponent(form.fname + ' ' + form.lname)}&email=${encodeURIComponent(form.email)}`

  return (
    <section className="cta-section" id="kontakt">
      <div className="cta-content">
        <p className="section-label reveal">Jetzt anfragen</p>
        <h2 className="section-title reveal">Ihr nächstes Event<br />steht an?</h2>
        <p className="section-text reveal">
          Füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden.
          Oder buchen Sie direkt einen Beratungstermin.
        </p>

        <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <a href="tel:+4915142840916" className="btn-primary">Jetzt anrufen</a>
          <a href={CALCOM_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Termin buchen →
          </a>
        </div>

        {status !== 'done' && (
          <div className="contact-form reveal" id="contactForm">
            <div className="form-row-double">
              <div className="form-row">
                <label htmlFor="fname">Vorname *</label>
                <input type="text" id="fname" value={form.fname} onChange={update('fname')} placeholder="Ihr Vorname" required />
              </div>
              <div className="form-row">
                <label htmlFor="lname">Nachname *</label>
                <input type="text" id="lname" value={form.lname} onChange={update('lname')} placeholder="Ihr Nachname" required />
              </div>
            </div>
            <div className="form-row-double">
              <div className="form-row">
                <label htmlFor="email">E-Mail *</label>
                <input type="email" id="email" value={form.email} onChange={update('email')} placeholder="ihre@email.de" required />
              </div>
              <div className="form-row">
                <label htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" value={form.phone} onChange={update('phone')} placeholder="Ihre Telefonnummer" />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="eventtype">Art der Veranstaltung *</label>
              <select id="eventtype" value={form.eventtype} onChange={update('eventtype')} required>
                <option value="" disabled>Bitte wählen...</option>
                {['Schützenfest','Hochzeit','Mobile Cocktailbar','Firmenfeier','Vereinsfest','Geburtstag','JGA','Dorffest','Sonstiges'].map(o => (
                  <option key={o} value={o}>{o === 'JGA' ? 'Junggesellenabschied (JGA)' : o}</option>
                ))}
              </select>
            </div>
            <div className="form-row-double">
              <div className="form-row">
                <label htmlFor="eventdate">Wunschdatum</label>
                <input type="date" id="eventdate" value={form.eventdate} onChange={update('eventdate')} min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="form-row">
                <label htmlFor="guests">Gästeanzahl</label>
                <select id="guests" value={form.guests} onChange={update('guests')}>
                  <option value="" disabled>Bitte wählen...</option>
                  {['bis 50','50–100','100–200','200–500','über 500'].map(o => (
                    <option key={o} value={o}>{o} Gäste</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="location">Veranstaltungsort</label>
              <input type="text" id="location" value={form.location} onChange={update('location')} placeholder="Stadt / Ort der Veranstaltung" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Ihre Nachricht</label>
              <textarea id="message" value={form.message} onChange={update('message')} placeholder="Erzählen Sie uns kurz, was Sie planen..." />
            </div>

            {status === 'error' && (
              <p style={{ color: '#e07070', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
                Fehler beim Senden. Bitte rufen Sie uns direkt an: <a href="tel:+4915142840916" style={{ color: 'var(--color-gold)' }}>0151 42840916</a>
              </p>
            )}

            <button type="button" className="form-submit" onClick={handleSubmit} disabled={status === 'sending'}>
              {status === 'sending' ? 'Wird gesendet...' : 'Unverbindlich anfragen'}
            </button>
            <p className="form-hint">* Pflichtfelder. Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet.</p>
          </div>
        )}

        {status === 'done' && (
          <div className="form-success" style={{ display: 'block' }}>
            <h3>Vielen Dank!</h3>
            <p>Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden.</p>
            <a href={calUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
              Direkt Termin buchen →
            </a>
          </div>
        )}

        <div className="cta-contact reveal" style={{ marginTop: '2.5rem' }}>
          <div className="cta-contact-item">
            <span className="icon">✉</span>
            <a href="mailto:info@frankies-eventservice.de">info@frankies-eventservice.de</a>
          </div>
          <div className="cta-contact-item">
            <span className="icon">✆</span>
            <a href="tel:+4915142840916">0151 42840916</a>
          </div>
          <div className="cta-contact-item">
            <span className="icon">◉</span>
            Hachener Str. 7, 57368 Lennestadt
          </div>
        </div>
      </div>
    </section>
  )
}
