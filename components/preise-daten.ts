/*
  Die einzige Stelle im Projekt, an der Cocktailpreise stehen.

  Vorher lagen die Pakete doppelt: einmal in app/cocktailbar-lennestadt
  (Flat 30/50/100 mit 1,5/2,5/3,5 Stunden) und einmal in BookingModal.tsx
  mit denselben Namen. Wer einen Preis geaendert haette, haette die zweite
  Stelle vergessen. scripts/belege-pruefen.mjs faellt jetzt durch, sobald
  ein Europreis ausserhalb dieser Datei im Code auftaucht.

  Stand 20.08.2026, vom Betreiber freigegeben. Die Preise gelten fuer die
  mobile Cocktailbar. Fuer Thekenservice, Getraenkecatering, Personal und
  Schuetzenfeste gibt es bewusst keine Listenpreise — dort haengt der
  Aufwand an Dauer, Mannschaft und Technik, und ein Vierteagesfest laesst
  sich nicht mit einem Abend vergleichen.
*/

export type Flat = {
  /** Anzahl Cocktails im Paket. */
  anzahl: number
  /** Pauschalpreis in Euro. */
  preis: number
  /** Ausschankdauer in Stunden. */
  stunden: number
  /** Kurzer Hinweis, fuer wen das Paket gedacht ist. */
  fuer: string
  /** Hebt genau ein Paket in der Darstellung hervor. */
  beliebt?: boolean
}

export const FLATS: Flat[] = [
  { anzahl: 50, preis: 425, stunden: 2, fuer: 'Geburtstag, Gartenparty, kleine Feier' },
  { anzahl: 100, preis: 800, stunden: 3, fuer: 'JGA, Hochzeit, Firmenfeier', beliebt: true },
  { anzahl: 150, preis: 1125, stunden: 4, fuer: 'Größere Hochzeit, Vereinsfest' },
  { anzahl: 200, preis: 1400, stunden: 5, fuer: 'Sommerfest, Schützenfest, großes Firmenevent' },
]

/* In jedem Paket enthalten. Steht einmal hier statt viermal in der
   Aufzaehlung jeder Karte — das ist bei allen vier identisch. */
export const IMMER_DABEI = [
  'Alle Zutaten: Spirituosen, Säfte, Limetten, Eis',
  'Bambustheke, aufgebaut vor Ort',
  'Barkeeper hinter der Theke',
  'Cocktailgläser',
  'Auf- und Abbau',
]

/** Name des Pakets, wie er im Formular und in der E-Mail auftaucht. */
export const flatName = (f: Flat) => `Flat ${f.anzahl}`

/**
 * Preis je Cocktail. Wird gerechnet, nicht gepflegt — sonst koennte die
 * Zahl vom Pauschalpreis abweichen. Die Staffelung wird dadurch sichtbar:
 * 8,50 € beim kleinsten Paket, 7,00 € beim groessten.
 */
export const proCocktail = (f: Flat) => f.preis / f.anzahl

/**
 * Deutsche Schreibweise. Glatte Pauschalen ohne Nachkommastellen
 * (425 €, nicht 425,00 €).
 */
export const euro = (n: number) =>
  n.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  })

/**
 * Immer mit zwei Nachkommastellen. Der Preis je Cocktail steht in einer
 * Spalte untereinander — "8 €" neben "8,50 €" liest sich wie ein
 * Versehen, "8,00 €" wie eine Preisliste.
 */
export const euroGenau = (n: number) =>
  n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 })

/*
  Vom Betreiber bestaetigt (20.08.2026): Die Betraege in FLATS sind
  Bruttopreise, also Endpreise inklusive Mehrwertsteuer. 425 € sind die
  425 €, die der Kunde zahlt.

  Das ist auch die Vorgabe der Preisangabenverordnung, sobald Verbraucher
  angesprochen werden — und die Cocktailbar richtet sich an Geburtstage,
  Hochzeiten und JGA. Die AGB nennen "Nettopreise zzgl. MwSt., sofern
  nicht anders ausgewiesen"; dieser Zusatz deckt die Anzeige hier ab.

  Wer spaeter Preise aendert: Die Werte in FLATS bleiben brutto. Ein
  Nettobetrag gehoert vorher umgerechnet, nicht dieser Hinweis angepasst.
*/
export const STEUER_HINWEIS = 'inkl. MwSt.'

/** Das hervorgehobene Paket — Vorauswahl in Formularen. */
export const STANDARD_FLAT = FLATS.find((f) => f.beliebt) ?? FLATS[0]
