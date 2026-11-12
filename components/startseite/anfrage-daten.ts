/*
  Gemeinsame Basis der beiden Anfrageformulare (11.11.2026):
  - Anfrage.tsx: das einseitige Formular auf der Startseite
  - AnfrageFunnel.tsx: dieselben Fragen in drei Schritten auf /kontakt

  Auswahllisten, Feldtyp und Versand stehen nur hier. So gehen beide Wege
  mit denselben Feldnamen an dasselbe Postfach, und eine Aenderung an den
  Fragen muss nicht an zwei Stellen passieren.
*/
import { MAX, kuerzen } from '@/components/formular-schutz'
import { anfrageMelden } from '@/components/anfrage-melden'
import type { Leistung } from './vorwahl'

export const CALCOM_URL = process.env.NEXT_PUBLIC_CALCOM_URL || 'https://cal.com/frankies.digital/15min'
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

export const ANLAESSE = ['Schützenfest', 'Hochzeit', 'Firmenfeier', 'Geburtstag', 'Vereinsfest', 'Karneval', 'Mobile Cocktailbar', 'Equipment mieten', 'Sonstige Veranstaltung']
export const GAESTE = ['bis 50', '50–100', '100–200', '200–500', 'über 500']

export type AnfrageFelder = { anlass: string; datum: string; gaeste: string; ort: string; leistungen: Leistung[]; nachricht: string; name: string; email: string; telefon: string }

export const ANFRAGE_LEER: AnfrageFelder = { anlass: '', datum: '', gaeste: '', ort: '', leistungen: [], nachricht: '', name: '', email: '', telefon: '' }

/* Pflicht sind nur Anlass, Name und E-Mail. */
export const kontaktGueltig = (f: AnfrageFelder) => !!f.name.trim() && f.email.includes('@')

/*
  Zusatz der Strecken fuer Winterbar und Cocktailbar (funnel-varianten.tsx):
  der Name der Strecke und die Antwort auf deren letzte Frage. Beides kommt
  aus festen Listen im Code, nie aus freier Eingabe.
*/
export type AnfrageZusatz = { formular?: string; zeilen?: Record<string, string> }

/* Schickt die Anfrage ueber Web3Forms ans Postfach. true = angenommen. */
export async function anfrageSenden(f: AnfrageFelder, zusatz?: AnfrageZusatz): Promise<boolean> {
  const name = kuerzen(f.name, MAX.name)
  const strecke = zusatz?.formular ? ` ${zusatz.formular}` : ''
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        botcheck: false,
        subject: `Anfrage${strecke}: ${f.anlass} — ${name}`,
        from_name: 'Frankies Eventservice Website',
        Name: name,
        'E-Mail': kuerzen(f.email, MAX.email),
        Telefon: kuerzen(f.telefon, MAX.telefon) || '–',
        Veranstaltung: f.anlass,
        Datum: f.datum || '–',
        Gäste: f.gaeste || '–',
        Ort: kuerzen(f.ort, MAX.ort) || '–',
        Leistungen: f.leistungen.join(', ') || '–',
        ...(zusatz?.zeilen ?? {}),
        Nachricht: kuerzen(f.nachricht, MAX.nachricht) || '–',
      }),
    })
    // Zaehlt die Anfrage fuer die Anzeigen-Messung; nur mit Einwilligung.
    if (res.ok) anfrageMelden()
    return res.ok
  } catch {
    return false
  }
}
