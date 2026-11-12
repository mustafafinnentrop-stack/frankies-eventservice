/*
  Referenzen — echte Veranstaltungen mit echten Zahlen. Alle Angaben
  stammen vom Betreiber. Nichts hier ist ausgedacht oder gerundet.

  `geplant: true` kennzeichnet Gebuchtes, das noch nicht gelaufen ist.
  Es ohne Kennzeichnung einzureihen hiesse zu behaupten, es sei bereits
  durchgefuehrt. Solche Eintraege laufen ueberall sichtbar als "Steht an".

  Kommentare zu einem Eintrag stehen VOR dessen oeffnender Klammer: Das
  Pruefskript erkennt einen Eintrag nur, wenn direkt nach "{" die Zeile
  "ort:" folgt. Ein Kommentar dazwischen liesse den Eintrag still durchfallen.

  scripts/belege-pruefen.mjs liest diese Datei: Zahlen, die Werbetexte
  nennen, muessen hier stehen. Neue Einsaetze kommen hier dazu — die
  Startseite zeigt eine Auswahl, /einsaetze zeigt alle.
*/
export type Referenz = {
  ort: string
  leistungen: string[]
  zahlen?: { wert: string; was: string }[]
  geplant?: true
  /** Ein, zwei Saetze zum Einsatz — nur was der Betreiber selbst gesagt hat. */
  notiz?: string
}

// Exportiert, damit Entwuerfe dieselben Zahlen benutzen statt eigene zu
// tippen. scripts/belege-pruefen.mjs findet den Block weiterhin.
export const REFERENZEN: Referenz[] = [
  {
    ort: 'Schützenfest Berghausen',
    leistungen: ['Thekenservice'],
    zahlen: [
      { wert: '100', was: 'Hektoliter Bier' },
      { wert: '18', was: 'Leute im Einsatz' },
    ],
  },
  // Durchgefuehrt (Angabe des Betreibers, 12.11.2026): ueber 700 Cocktails,
  // der Kunde hat danach fuer seine Weihnachtsfeier erneut gebucht.
  // Leistungen und Gaestezahl stammen noch aus der Planung.
  {
    ort: 'Firmenfeier Westmark',
    leistungen: ['Mobile Cocktailbar', 'Foodtruck'],
    zahlen: [
      { wert: '1.200', was: 'geladene Gäste' },
      { wert: 'über 700', was: 'Cocktails gemixt' },
    ],
    notiz: 'Über 700 Cocktails gemixt. Danach hat uns der Kunde für seine Weihnachtsfeier erneut gebucht.',
  },
  // Durchgefuehrt am 05.09.2026 (Angabe des Betreibers, 09.11.2026).
  {
    ort: 'Hochzeit auf Schloss Melschede',
    leistungen: ['Getränkecatering', 'Servicepersonal', 'Kaffeestation'],
    zahlen: [{ wert: '80', was: 'Gäste' }],
  },
  {
    ort: 'Schützenfest Marmecke',
    leistungen: ['Thekenservice'],
    zahlen: [{ wert: '12', was: 'Leute im Einsatz' }],
  },
  {
    ort: 'Firmenfeier Schneider Haustechnik',
    leistungen: ['Catering', 'Mobile Cocktailbar'],
  },
  {
    ort: 'Campingplatz Kalberschnacke',
    leistungen: ['Mobile Cocktailbar'],
  },
  // Gebucht fuer Dezember 2026 (Angabe des Betreibers, 12.11.2026). Welche
  // Leistungen gebucht sind, ist noch nicht genannt — deshalb leer, nichts
  // geraten. Nach dem Termin `geplant` entfernen und Leistungen nachtragen.
  {
    ort: 'Weihnachtsfeier Westmark',
    leistungen: [],
    geplant: true,
    notiz: 'Nach der Firmenfeier erneut gebucht. Dieser Einsatz steht noch an.',
  },
]
