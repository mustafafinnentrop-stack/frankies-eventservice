/*
  Gemeinsame Datenbasis der drei Entwuerfe. Alle drei zeigen dieselben
  Leistungen mit denselben Texten — unterschiedlich ist nur die Form.
  Sonst waere der Vergleich wertlos.

  Zwei Leistungen haben kein Foto: Foodtruck und Kaffeestation. Beide
  kommen aus Auftraegen, die noch anstehen (Westmark, Schloss Melschede),
  es gibt schlicht noch keine Aufnahme davon. Die Entwuerfe behandeln das
  jeweils als bewusste Abweichung, nicht als Luecke.
*/
export type Leistung = {
  titel: string
  zeile: string
  bild?: string
  alt?: string
  /* Bildausschnitt. Die Aufnahmen sind Handyfotos im Hochkant- oder
     Querformat; in einer breiten Kachel schneidet `cover` sonst genau das
     Falsche an — beim Ausschankwagen etwa die Decke statt der Mannschaft.
     Der Wert geht direkt an object-position. */
  pos?: string
}

export const LEISTUNGEN: Leistung[] = [
  {
    titel: 'Thekenservice & Zapfanlage',
    zeile: 'Theke, Zapftechnik und Mannschaft. Beim Schützenfest Berghausen 18 Leute.',
    bild: '/ausschankwagen.webp',
    pos: 'center 78%',
    alt: 'Ausschankwagen von Frankies Eventservice im Betrieb auf einem Fest',
  },
  {
    titel: 'Mobile Cocktailbar',
    zeile: 'Bambustheke, frisch gemixt, aufgebaut wo Sie feiern.',
    bild: '/theke-vor-ort.webp',
    pos: 'center 62%',
    alt: 'Die mobile Bambustheke von Frankies Eventservice, vor Ort aufgebaut',
  },
  {
    titel: 'Getränkecatering',
    zeile: 'Wir planen die Menge, liefern und kühlen. Sie bleiben auf nichts sitzen.',
    bild: '/schuetzenfest.webp',
    pos: '40% 45%',
    alt: 'Mitarbeiterin von Frankies Eventservice mit einem Tablett voller Biergläser',
  },
  {
    titel: 'Servicepersonal',
    zeile: 'Eingespielte Kräfte für Ausschank, Empfang und Abräumen.',
    bild: '/glaeser.webp',
    pos: 'center 40%',
    alt: 'Zwei Mitarbeiter von Frankies Eventservice räumen Gläser hinter der Theke ein',
  },
  {
    titel: 'Catering & Foodtruck',
    zeile: 'Essen und Getränke aus einer Hand.',
  },
  {
    titel: 'Kaffeestation',
    zeile: 'Für den Nachmittag nach der Trauung.',
  },
]
