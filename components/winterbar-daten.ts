/*
  Getraenkekarte der Winterbar — woertlich aus der Karte des Betreibers
  ("NEU_Frankies_Winterbar_Getraenkekarte.pdf", geliefert am 30.10.2026).
  Namen, Beschreibungen und Preise nicht aendern, ohne dass der Betreiber
  eine neue Karte schickt.

  Die Karte nennt bei "Heisse Oma" und "Pumpkin Spice Milk" einen
  Angebotspreis mit Streichpreis. Auf der Website steht bewusst nur ein
  Preis ohne Streichpreis: Eine beworbene Preisermaessigung muss nach
  § 11 PAngV den niedrigsten Preis der letzten 30 Tage nennen. Welcher
  Preis hier gilt, entscheidet der Betreiber (siehe preis).
*/
export type WinterGetraenk = {
  name: string
  beschreibung: string
  preis: string
  neu?: boolean
}

export const WINTER_MIT_SCHUSS: WinterGetraenk[] = [
  { name: 'Hot Aperol', beschreibung: 'Heißer Punsch mit Aperol, Sekt und Orange', preis: '6,50' },
  { name: 'Hot Lillet', beschreibung: 'Heißer Punsch mit Lillet Blanc und Orange', preis: '6,50' },
  { name: 'Glühgin', beschreibung: 'Heißer Punsch mit Gin und Orange', preis: '6,50' },
  { name: 'Wilder Punsch', beschreibung: 'Heißer Fruchtpunsch mit Wodka', preis: '6,50', neu: true },
  { name: 'Baileys Kakao', beschreibung: 'Hot Chocolate mit Baileys und Sahne', preis: '6,50', neu: true },
  { name: 'Lumumba', beschreibung: 'Hot Chocolate mit Rum, Sahne und Schokostreuseln', preis: '6,50' },
  { name: 'Mocca Kakao', beschreibung: 'Hot Chocolate mit Kaffeelikör und Sahne', preis: '6,50', neu: true },
  { name: 'Hot White Russian', beschreibung: 'Heiße Milch mit Wodka, Kaffeelikör und Sahne', preis: '7,50', neu: true },
  { name: 'Heiße Oma', beschreibung: 'Warmer Eierpunsch mit Sahnehaube und Zimt', preis: '5,50' },
]

export const WINTER_OHNE_ALKOHOL: WinterGetraenk[] = [
  { name: 'Pumpkin Spice Milk', beschreibung: 'Heiße Milch mit Kürbisgewürz-Sirup', preis: '3,00' },
  { name: 'Hot Chocolate', beschreibung: 'Heiße Milch mit Schokolade und Mini-Marshmallows', preis: '3,00' },
  { name: 'Kinderpunsch', beschreibung: 'Fruchtiger Punsch, warm serviert', preis: '3,00' },
]

export const WINTER_HINWEISE = [
  'Alle Preise in Euro inkl. MwSt. · Alkoholische Getränke nur an Gäste ab 18 Jahren.',
  'Allergene und Zusatzstoffe: siehe Aushang an der Bar.',
]

/*
  Saison laut Betreiber (30.10.2026): November bis Februar.
  Der Hinweis auf der Startseite erscheint schon ab September, weil
  Weihnachtsfeiern meist im Herbst gebucht werden. Monate 1–12.
  Die Seite /winterbar selbst bleibt das ganze Jahr erreichbar.
*/
export const WINTER_SAISON_TEXT = 'November bis Februar'
export const WINTER_HINWEIS_MONATE = [9, 10, 11, 12, 1, 2]
export const WINTER_ANLAESSE = 'Weihnachtsfeiern, Adventsmärkte, Firmenfeiern und Hochzeiten im Winter'
