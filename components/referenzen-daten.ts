/*
  Referenzen — echte Veranstaltungen mit echten Zahlen. Alle Angaben
  stammen vom Betreiber. Nichts hier ist ausgedacht oder gerundet.

  `geplant: true` kennzeichnet Gebuchtes, das noch nicht gelaufen ist.
  Es ohne Kennzeichnung einzureihen hiesse zu behaupten, es sei bereits
  durchgefuehrt. Solche Eintraege laufen ueberall sichtbar als "Steht an".

  scripts/belege-pruefen.mjs liest diese Datei: Zahlen, die Werbetexte
  nennen, muessen hier stehen. Neue Einsaetze kommen hier dazu — die
  Startseite zeigt eine Auswahl, /einsaetze zeigt alle.
*/
export type Referenz = {
  ort: string
  leistungen: string[]
  zahlen?: { wert: string; was: string }[]
  geplant?: true
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
  {
    ort: 'Firmenfeier Westmark',
    leistungen: ['Mobile Cocktailbar', 'Foodtruck'],
    zahlen: [{ wert: '1.200', was: 'geladene Gäste' }],
    geplant: true,
  },
  {
    ort: 'Hochzeit auf Schloss Melschede',
    leistungen: ['Getränkecatering', 'Servicepersonal', 'Kaffeestation'],
    zahlen: [{ wert: '80', was: 'Gäste' }],
    geplant: true,
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
]
