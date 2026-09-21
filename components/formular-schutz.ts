/*
  Gemeinsamer Schutz fuer die drei Anfrageformulare (Startseite, Service-
  Seite, Buchungsfenster). Alle drei senden ueber Web3Forms mit einem
  oeffentlichen Browser-Schluessel — der Schluessel steht zwangslaeufig im
  ausgelieferten JavaScript und kann den Empfaenger nicht aendern, aber
  jeder kann damit Mails an das Postfach ausloesen. Drei Bremsen, die
  keine Eingabe eines echten Kunden behindern:

  1. Honeypot: ein unsichtbares Kontrollkaestchen "botcheck". Menschen sehen
     es nicht, Formular-Bots setzen es. Ist es gesetzt, wird nichts gesendet
     und der Bot sieht trotzdem eine Erfolgsmeldung. Web3Forms wertet das
     Feld serverseitig ebenfalls aus.
  2. Laengengrenzen: Felder werden im Browser begrenzt und vor dem Senden
     nochmals gekuerzt, damit niemand Kilobyte-Texte ins Postfach schiebt.
  3. Wiederholsperre: nach einem erfolgreichen Versand ist dasselbe Fenster
     fuer eine Minute gesperrt — gegen Doppelklick und Klick-Skripte.

  Ein Rate-Limit pro Absender kann nur der Formulardienst oder das Hosting
  setzen; die Seite selbst hat keinen Server. Siehe docs/sicherheit.md.
*/
export const MAX = {
  name: 100,
  email: 120,
  telefon: 40,
  ort: 120,
  strasse: 120,
  plz: 5,
  stadt: 80,
  nachricht: 2000,
} as const

export function kuerzen(wert: string, max: number): string {
  return wert.trim().slice(0, max)
}

/* Unsichtbar, aber nicht display:none — manche Bots ueberspringen versteckte
   Felder, fuellen aber alles aus, was im Dokument steht. */
export const HONEYPOT_STIL: React.CSSProperties = {
  position: 'absolute',
  left: '-10000px',
  width: '1px',
  height: '1px',
  opacity: 0,
  overflow: 'hidden',
}

const SPERRE_MS = 60_000

export function gesperrt(schluessel: string): boolean {
  try {
    const zuletzt = Number(sessionStorage.getItem(schluessel) || 0)
    return Date.now() - zuletzt < SPERRE_MS
  } catch {
    return false
  }
}

export function sperren(schluessel: string): void {
  try {
    sessionStorage.setItem(schluessel, String(Date.now()))
  } catch {
    /* Privatmodus ohne Speicher: dann eben ohne Sperre */
  }
}
