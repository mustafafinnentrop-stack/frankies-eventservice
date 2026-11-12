import type { ReactNode } from 'react'
import { ANLAESSE } from './anfrage-daten'
import type { Leistung } from './vorwahl'
import { FLATS, flatName, euro, STEUER_HINWEIS } from '@/components/preise-daten'
import { WINTER_MIT_SCHUSS, WINTER_OHNE_ALKOHOL, WINTER_SAISON_TEXT } from '@/components/winterbar-daten'

/*
  Die drei Fassungen der Anfrage in drei Schritten (12.11.2026, Wunsch des
  Betreibers: eigene Strecken fuer Winterbar und Cocktailbar, damit Anzeigen
  und die beiden Seiten direkt darauf fuehren koennen).

    allgemein    /kontakt
    winterbar    /kontakt/winterbar
    cocktailbar  /kontakt/cocktailbar

  Aufbau, Versand und Kontaktfelder sind in allen drei gleich
  (AnfrageFunnel.tsx, anfrage-daten.ts). Unterschiedlich sind nur die
  Ueberschrift, die Anlaesse in Schritt 1 und die letzte Frage in Schritt 2.

  Nichts hier ist erfunden:
  - Anlaesse der Winterbar: WINTER_ANLAESSE in winterbar-daten.ts.
  - "Alle zwoelf Getraenke oder eine Auswahl": Abschnitt "So laeuft es" auf
    /winterbar. Die Zahl wird aus der Karte gezaehlt, nicht getippt.
  - Anlaesse der Cocktailbar: Abschnitt "Ideal fuer Ihre Feier" auf
    /cocktailbar-lennestadt.
  - Pakete und Preise: FLATS in preise-daten.ts, der einzigen Stelle, an der
    Cocktailpreise stehen.

  Neue Angaben in der Anfrage-Mail: "Karte" (Winterbar) und "Paket"
  (Cocktailbar). Beides sind Angaben zur Veranstaltung, keine Kontaktdaten.
  Zweck: Angebot erstellen. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
  Speicherort und Loeschfrist wie bei jeder Anfrage: das Postfach des
  Betreibers; die Frist legt der Betreiber fest.
*/
export type FunnelArt = 'allgemein' | 'winterbar' | 'cocktailbar'

export type FunnelWahl = {
  /** Die Frage ueber den Antworten. */
  legende: string
  /** Unter diesem Namen steht die Antwort in der Mail. */
  feld: string
  optionen: { wert: string; text: string }[]
  /** Kleine Zeile unter den Antworten. */
  hinweis?: string
  /** Name des Adress-Parameters, ueber den eine Antwort vorausgewaehlt
      werden darf — nur Werte aus `vorwahl`, nichts Freies aus der URL. */
  parameter?: string
  vorwahl?: Record<string, string>
}

export type FunnelVariante = {
  eyebrow: string
  note: string
  h1: ReactNode
  lead: string
  /** Darf weiche Trennstellen (\\u00AD) enthalten: Lange Woerter wie
      "Junggesellenabschied" passen sonst nicht in die Knoepfe von Schritt 1.
      In Mail und Zusammenfassung steht das Wort ohne Trennstelle. */
  anlaesse: string[]
  /** true: Auf dem Handy stehen die Knoepfe von Schritt 1 untereinander
      statt zu zweit nebeneinander. */
  lang?: boolean
  /** Letzte Frage in Schritt 2. Fehlt sie, steht dort die allgemeine
      Liste "Was sollen wir uebernehmen?". */
  wahl?: FunnelWahl
  /** Steht fest unter "Leistungen" in der Mail, wenn die allgemeine Liste
      entfaellt. */
  leistung?: Leistung
  /** Name der Strecke in Betreff und Mail. */
  formular?: string
  nachrichtBeispiel: string
}

const WINTER_GETRAENKE = WINTER_MIT_SCHUSS.length + WINTER_OHNE_ALKOHOL.length
const WEISS_NICHT = 'Weiß ich noch nicht'

export const FUNNEL: Record<FunnelArt, FunnelVariante> = {
  allgemein: {
    eyebrow: 'Kontakt',
    note: 'Lennestadt · Kreis Olpe · Sauerland',
    h1: <>Wann dürfen<br />wir <em>mit anpacken?</em></>,
    lead: 'Drei kurze Schritte, dann haben wir alles für Ihr Angebot.',
    anlaesse: ANLAESSE,
    nachrichtBeispiel: 'z. B. Ausschank von 17 bis 1 Uhr, Zelt steht schon',
  },
  winterbar: {
    eyebrow: 'Winterbar anfragen',
    note: `Saison ${WINTER_SAISON_TEXT}`,
    h1: <>Winterbar<br /><em>anfragen.</em></>,
    lead: 'Drei kurze Schritte, dann haben wir alles für Ihr Angebot.',
    anlaesse: ['Weihnachts\u00ADfeier', 'Advents\u00ADmarkt', 'Firmen\u00ADfeier', 'Hochzeit im Winter', 'Sonstige Veranstaltung'],
    wahl: {
      legende: 'Wie viel Karte soll es sein?',
      feld: 'Karte',
      optionen: [
        { wert: `Alle ${WINTER_GETRAENKE} Getränke`, text: `Alle ${WINTER_GETRAENKE} Getränke` },
        { wert: 'Eine Auswahl', text: 'Eine Auswahl' },
        { wert: WEISS_NICHT, text: WEISS_NICHT },
      ],
    },
    lang: true,
    leistung: 'Winterbar',
    formular: 'Winterbar',
    nachrichtBeispiel: 'z. B. Ausschank von 17 bis 22 Uhr, Strom ist vorhanden',
  },
  cocktailbar: {
    eyebrow: 'Cocktailbar anfragen',
    note: 'Lennestadt · Kreis Olpe · Sauerland',
    h1: <>Cocktailbar<br /><em>anfragen.</em></>,
    lead: 'Drei kurze Schritte, dann haben wir alles für Ihr Angebot.',
    anlaesse: ['Hochzeit', 'Jung\u00ADgesellen\u00ADabschied', 'Geburts\u00ADtag', 'Firmen\u00ADfeier', 'Schützen\u00ADfest', 'Dorf- oder Vereins\u00ADfest', 'Sonstige Veranstaltung'],
    wahl: {
      legende: 'Welches Paket?',
      feld: 'Paket',
      optionen: [
        ...FLATS.map((f) => ({ wert: flatName(f), text: `${f.anzahl} Cocktails · ${f.stunden} Std. · ${euro(f.preis)}` })),
        { wert: WEISS_NICHT, text: WEISS_NICHT },
      ],
      hinweis: `Preise ${STEUER_HINWEIS}, mit Zutaten, Bambustheke, Barkeeper, Gläsern, Auf- und Abbau.`,
      parameter: 'paket',
      vorwahl: Object.fromEntries(FLATS.map((f) => [String(f.anzahl), flatName(f)])),
    },
    lang: true,
    leistung: 'Mobile Cocktailbar',
    formular: 'Cocktailbar',
    nachrichtBeispiel: 'z. B. Sektempfang ab 15 Uhr, Feier im Garten',
  },
}
