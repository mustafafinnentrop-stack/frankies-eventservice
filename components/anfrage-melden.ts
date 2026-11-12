/*
  Meldet dem Mess-Pixel von OpenAI, dass eine Anfrage abgeschickt wurde
  (12.11.2026). Damit sieht das Werbekonto, ob ein Klick auf eine Anzeige
  in ChatGPT zu einer Anfrage gefuehrt hat. Aufgerufen wird das von jedem
  Anfrageformular, und zwar erst, wenn der Versand geklappt hat:
  Startseite und /kontakt (startseite/anfrage-daten.ts), Service-Seite
  (Kontakt.tsx), Buchungsfenster (BookingModal.tsx). Das Partnerformular
  meldet nichts — eine Bewerbung als Partner ist keine Kundenanfrage.

  - window.oaiq gibt es nur, wenn der Besucher im Cookie-Fenster
    "Marketing" eingeschaltet hat (CookieConsent.tsx). Ohne Einwilligung
    passiert hier nichts.
  - Von hier aus geht nur das Ereignis "lead_created" mit, keine Angaben
    aus dem Formular. ABER: Fuer unser Pixel ist bei OpenAI das
    "automatische erweiterte Matching" eingeschaltet (Entscheidung des
    Betreibers, 12.11.2026). Das Skript von OpenAI liest deshalb selbst im
    Formular mit und haengt an dieses Ereignis E-Mail, Namen und Telefon als
    SHA-256-Wert sowie Ort und Postleitzahl im Klartext an. Gemessen im
    Browser; Einzelheiten und der Weg zum Abschalten stehen in
    next.config.ts.
  - opt_out: true nimmt das Ereignis aus einer spaeteren Nutzung fuer
    personenbezogene Werbung heraus. OpenAI nutzt Pixel-Daten dafuer nach
    eigener Doku bisher nicht; der Schalter haelt es auch kuenftig bei der
    reinen Messung, so wie es im Cookie-Fenster steht.
  - Ein Fehler hier darf den Versand der Anfrage nie stoeren.
*/
export function anfrageMelden() {
  try {
    const w = window as unknown as { oaiq?: (...a: unknown[]) => void }
    w.oaiq?.('measure', 'lead_created', { type: 'customer_action' }, { opt_out: true })
  } catch { /* Messung ist Beiwerk */ }
}
