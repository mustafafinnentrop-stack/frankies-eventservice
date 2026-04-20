'use client'

import { useState } from 'react'

interface FormData {
  fname: string
  lname: string
  email: string
  phone: string
  eventtype: string
  eventdate: string
  guests: string
  location: string
  message: string
}

export default function Kontakt() {
  const [form, setForm] = useState<FormData>({
    fname: '', lname: '', email: '', phone: '',
    eventtype: '', eventdate: '', guests: '', location: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = () => {
    if (!form.fname || !form.lname || !form.email || !form.eventtype) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.')
      return
    }
    if (!form.email.includes('@') || !form.email.includes('.')) {
      alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.')
      return
    }

    const subject = encodeURIComponent(`Neue Anfrage: ${form.eventtype} von ${form.fname} ${form.lname}`)
    const body = encodeURIComponent(
      `NEUE ANFRAGE über frankies-eventservice.de\n==========================================\n\n` +
      `Name: ${form.fname} ${form.lname}\nE-Mail: ${form.email}\nTelefon: ${form.phone || 'nicht angegeben'}\n\n` +
      `Art der Veranstaltung: ${form.eventtype}\nWunschdatum: ${form.eventdate || 'nicht angegeben'}\n` +
      `Gästeanzahl: ${form.guests || 'nicht angegeben'}\nVeranstaltungsort: ${form.location || 'nicht angegeben'}\n\n` +
      `Nachricht:\n${form.message || 'keine Nachricht'}\n\n==========================================\nBitte innerhalb von 24 Stunden antworten!`
    )

    window.location.href = `mailto:info@frankies-eventservice.de?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="cta-section" id="kontakt">
      <div className="cta-content">
        <p className="section-label reveal">Jetzt anfragen</p>
        <h2 className="section-title reveal">Ihr nächstes Event<br />steht an?</h2>
        <p className="section-text reveal">
          Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden
          bei Ihnen. Oder rufen Sie uns direkt an.
        </p>

        {!submitted ? (
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
                {['Schützenfest','Hochzeit','Mobile Cocktailbar','Firmenfeier','Vereinsfest','Geburtstag','JGA','Dorffest','Sonstiges'].map((o) => (
                  <option key={o} value={o}>{o === 'JGA' ? 'Junggesellenabschied' : o}</option>
                ))}
              </select>
            </div>
            <div className="form-row-double">
              <div className="form-row">
                <label htmlFor="eventdate">Wunschdatum</label>
                <input type="date" id="eventdate" value={form.eventdate} onChange={update('eventdate')} />
              </div>
              <div className="form-row">
                <label htmlFor="guests">Erwartete Gästeanzahl</label>
                <select id="guests" value={form.guests} onChange={update('guests')}>
                  <option value="" disabled>Bitte wählen...</option>
                  {['bis 50','50-100','100-200','200-500','über 500'].map((o) => (
                    <option key={o} value={o}>{o === 'bis 50' ? 'bis 50 Gäste' : o === 'über 500' ? 'über 500 Gäste' : `${o} Gäste`}</option>
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
            <button type="button" className="form-submit" onClick={handleSubmit}>
              Unverbindlich anfragen
            </button>
            <p className="form-hint">* Pflichtfelder. Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet.</p>
          </div>
        ) : (
          <div className="form-success" style={{ display: 'block' }}>
            <h3>Vielen Dank!</h3>
            <p>Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen. Sie erhalten in Kürze eine Bestätigung per E-Mail.</p>
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
            Lennestadt, NRW
          </div>
        </div>
      </div>
    </section>
  )
}
