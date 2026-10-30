/*
  Was ein Kunde ankreuzen kann, statt es formulieren zu muessen — dieselbe
  Liste im Paket-Block und im Anfrageformular. Klickt jemand bei einem
  Paket auf "Angebot anfordern", springt die Seite zum Formular und die
  passenden Kaestchen sind schon gesetzt. Uebergabe per Browser-Ereignis,
  nichts wird gespeichert.

  Umbau 25.10.2026 nach Vorgabe des Betreibers: Die Pakete heissen nach
  dem Ergebnis, nicht nach der Eigenleistung ("Wie viel wollen Sie selbst
  machen?" ist gestrichen). Die Festwirtschaft steht zuerst und traegt
  die Empfehlung.
*/
export const LEISTUNGSWAHL = [
  'Getränke liefern',
  'Theke mit Personal',
  'Mobile Cocktailbar',
  'Zelt und Equipment mieten',
  'Winterbar',
  'Weiß ich noch nicht',
] as const

export type Leistung = (typeof LEISTUNGSWAHL)[number]

export const STUFEN: { titel: string; kurz: string; text: string; wahl: Leistung[]; empfohlen?: boolean }[] = [
  {
    titel: 'Komplette Festwirtschaft',
    kurz: 'Sie feiern. Wir machen den Rest.',
    text: 'Getränke, Theke mit Personal, auf Wunsch Cocktailbar, Zelt und Garnituren. Wir bauen auf, machen den Abend und räumen wieder ab.',
    wahl: ['Getränke liefern', 'Theke mit Personal', 'Mobile Cocktailbar', 'Zelt und Equipment mieten'],
    empfohlen: true,
  },
  {
    titel: 'Theke mit Personal',
    kurz: 'Unsere Leute an Ihrer Theke.',
    text: 'Getränke plus Personal, das zapft, mixt und bedient — vom Aufbau bis zum Abbau. Sie kümmern sich um Ihre Gäste, nicht um den Ausschank.',
    wahl: ['Getränke liefern', 'Theke mit Personal'],
  },
  {
    titel: 'Getränkelieferung',
    kurz: 'Geliefert, gekühlt, aufgebaut.',
    text: 'Getränke, Zapfanlage und Kühlung kommen von uns — geliefert und fertig aufgebaut. Personal können Sie jederzeit dazubuchen.',
    wahl: ['Getränke liefern', 'Zelt und Equipment mieten'],
  },
]

export const VORWAHL_EREIGNIS = 'fe-vorwahl'

export function vorwahlSenden(wahl: Leistung[]) {
  window.dispatchEvent(new CustomEvent<Leistung[]>(VORWAHL_EREIGNIS, { detail: wahl }))
}
