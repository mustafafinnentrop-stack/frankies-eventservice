/*
  Was ein Kunde ankreuzen kann, statt es formulieren zu muessen — dieselbe
  Liste im Stufen-Block ("Wie viel wollen Sie selbst machen?") und im
  Anfrageformular. Klickt jemand bei einer Stufe auf "Das brauche ich",
  springt die Seite zum Formular und die passenden Kaestchen sind schon
  gesetzt. Uebergabe per Browser-Ereignis, nichts wird gespeichert.
*/
export const LEISTUNGSWAHL = [
  'Getränke liefern',
  'Theke mit Personal',
  'Mobile Cocktailbar',
  'Zelt und Equipment mieten',
  'Weiß ich noch nicht',
] as const

export type Leistung = (typeof LEISTUNGSWAHL)[number]

export const STUFEN: { titel: string; kurz: string; text: string; wahl: Leistung[] }[] = [
  {
    titel: 'Nur liefern',
    kurz: 'Sie schenken selbst aus.',
    text: 'Getränke, Zapfanlage und Kühlung kommen von uns, geliefert und aufgebaut. Hinter der Theke stehen Ihre Leute.',
    wahl: ['Getränke liefern', 'Zelt und Equipment mieten'],
  },
  {
    titel: 'Liefern und ausschenken',
    kurz: 'Unsere Leute stehen an der Theke.',
    text: 'Getränke plus Personal, das zapft, mixt und bedient — von Aufbau bis Abbau. Sie kümmern sich um Ihre Gäste, nicht um den Ausschank.',
    wahl: ['Getränke liefern', 'Theke mit Personal'],
  },
  {
    titel: 'Alles abgeben',
    kurz: 'Sie feiern nur noch.',
    text: 'Getränke, Theke mit Personal, mobile Cocktailbar, Zelt und Garnituren. Wir bauen auf, machen den Abend und räumen wieder ab.',
    wahl: ['Getränke liefern', 'Theke mit Personal', 'Mobile Cocktailbar', 'Zelt und Equipment mieten'],
  },
]

export const VORWAHL_EREIGNIS = 'fe-vorwahl'

export function vorwahlSenden(wahl: Leistung[]) {
  window.dispatchEvent(new CustomEvent<Leistung[]>(VORWAHL_EREIGNIS, { detail: wahl }))
}
