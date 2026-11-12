/*
  Meldet OpenAI, dass eine Anfrage abgeschickt wurde (12.11.2026). Damit
  sieht das Werbekonto, ob ein Klick auf eine Anzeige in ChatGPT zu einer
  Anfrage gefuehrt hat. Aufgerufen wird das von jedem Anfrageformular, und
  zwar erst, wenn der Versand geklappt hat: Startseite und /kontakt
  (startseite/anfrage-daten.ts), Service-Seite (Kontakt.tsx), Buchungsfenster
  (BookingModal.tsx). Das Partnerformular meldet nichts — eine Bewerbung als
  Partner ist keine Kundenanfrage.

  Die Meldung geht auf zwei Wegen raus, beide mit derselben Kennung, damit
  OpenAI sie als ein und dieselbe erkennt und nur einmal zaehlt:
    1. ueber das Pixel im Browser (oaiq "measure"),
    2. ueber die eigene Server-Funktion /api/conversion, die sie per
       Conversions API weiterreicht.

  - window.oaiq gibt es nur, wenn der Besucher im Cookie-Fenster
    "Marketing" eingeschaltet hat (CookieConsent.tsx). Ohne Einwilligung
    passiert hier nichts — auf keinem der beiden Wege.
  - Von hier aus geht nur das Ereignis "lead_created" mit, keine Angaben
    aus dem Formular. ABER: Fuer unser Pixel ist bei OpenAI das
    "automatische erweiterte Matching" eingeschaltet (Entscheidung des
    Betreibers, 12.11.2026). Das Skript von OpenAI liest deshalb selbst im
    Formular mit und haengt an die Meldung des Pixels E-Mail, Namen und
    Telefon als SHA-256-Wert sowie den Ort im Klartext an. Gemessen im
    Browser; Einzelheiten und der Weg zum Abschalten stehen in
    next.config.ts. Die Server-Funktion bekommt davon nichts.
  - opt_out: true nimmt das Ereignis aus einer spaeteren Nutzung fuer
    personenbezogene Werbung heraus. OpenAI nutzt die Daten dafuer nach
    eigener Doku bisher nicht; der Schalter haelt es auch kuenftig bei der
    reinen Messung, so wie es im Cookie-Fenster steht.
  - Ein Fehler hier darf den Versand der Anfrage nie stoeren.
*/
function neueKennung(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID()
  // Sehr alte Browser: dieselbe Form aus Zufallszahlen.
  return 'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replace(/x/g, () => Math.floor(Math.random() * 16).toString(16))
}

export function anfrageMelden() {
  try {
    const w = window as unknown as { oaiq?: (...a: unknown[]) => void }
    if (typeof w.oaiq !== 'function') return

    const id = neueKennung()
    w.oaiq('measure', 'lead_created', { type: 'customer_action' }, { event_id: id, opt_out: true })

    // keepalive: Die Meldung geht auch dann noch raus, wenn der Besucher die
    // Seite gleich danach verlaesst.
    fetch('/api/conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => { /* Messung ist Beiwerk */ })
  } catch { /* Messung ist Beiwerk */ }
}
