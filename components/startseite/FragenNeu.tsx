import { FLATS } from '@/components/preise-daten'

/*
  05 / Bevor Sie anfragen. Antworten auf die Fragen, die vor einer Anfrage
  kommen. Jede Antwort ist durch die Seite oder die AGB gedeckt:
  - Personal + Getränke aus einer Hand: das Geschaeftsmodell (Thekenservice
    mit eigener Mannschaft, Getraenkecatering, Bausteine einzeln).
  - Cocktailbar autark, Pauschalen: preise-daten.ts und Cocktailbar-Seite.
  - Uebrig gebliebene Getraenke: AGB § 6 Absatz 3 (Ruecknahme nur nach
    Vereinbarung, originalverschlossen).
  - Strom und Wasser: AGB § 8 Absatz 1 (im Vertrag vereinbarte
    Voraussetzungen), Cocktailbar laeuft ohne Anschluss.
  - 24 Stunden, Region, Vorlauf: stehen so bereits auf der Seite.
  Neue Fragen aus dem Posteingang kommen hier dazu — nicht erfinden.
*/
const kleinste = FLATS[0]

export const FRAGEN: { frage: string; antwort: string }[] = [
  {
    frage: 'Kann ich Personal und Getränke zusammen buchen?',
    antwort: 'Ja, das ist unser Kern. Wir liefern die Getränke und stellen die Leute, die zapfen, mixen und bedienen — bei großen Festen bis zu zwanzig. Sie können aber auch nur Getränke oder nur Equipment nehmen.',
  },
  {
    frage: 'Bringt ihr Theke, Zapfanlage und Kühlung mit?',
    antwort: 'Ja. Theke, Zapftechnik, Kühlanhänger und Gläser kommen mit uns. Auch Festzelte, Bierzeltgarnituren und Hüpfburgen gibt es zur Miete, auf Wunsch ohne Personal.',
  },
  {
    frage: 'Was ist mit Getränken, die übrig bleiben?',
    antwort: 'Wenn wir es vorher so vereinbaren, nehmen wir originalverschlossene, unbeschädigte Gebinde zurück. Das steht dann ausdrücklich im Angebot, damit es hinterher keine Überraschung gibt.',
  },
  {
    frage: 'Brauchen wir Strom und Wasser vor Ort?',
    antwort: 'Die mobile Cocktailbar läuft ohne Anschluss. Für Zapfanlage und Kühlung brauchen wir Strom. Was Ihr Ort bieten muss, klären wir vor dem Angebot, damit am Tag nichts fehlt.',
  },
  {
    frage: 'Was kostet das?',
    antwort: `Die Cocktailbar hat feste Pauschalen, die kleinste ab ${kleinste.preis} € für ${kleinste.anzahl} Cocktails. Thekenservice und Getränke hängen an Gästezahl, Dauer, Personal, Technik und Anfahrt — dafür bekommen Sie innerhalb von 24 Stunden ein Angebot, kein Listenpreis.`,
  },
  {
    frage: 'Wie weit im Voraus sollte ich anfragen?',
    antwort: 'Für Hochzeiten und große Feste sind drei bis sechs Monate gut, für Geburtstage und kleinere Feiern reichen oft vier bis sechs Wochen. Kurzfristig: einfach anrufen, oft geht mehr, als man denkt.',
  },
  {
    frage: 'Wo seid ihr unterwegs?',
    antwort: 'Lennestadt, Kreis Olpe und das Sauerland. Alles darüber hinaus fragen Sie einfach an, dann sagen wir ehrlich, ob es passt.',
  },
]

export default function FragenNeu() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
  }

  return (
    <section className="sn-fragen" id="fragen" aria-labelledby="sn-fragen-titel">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="sn-top sn-reveal">
        <span className="sn-eyebrow">05 / Bevor Sie anfragen</span>
        <span className="sn-note">Was uns am Telefon gefragt wird</span>
      </div>
      <div className="sn-fragen-layout">
        <h2 className="sn-reveal" id="sn-fragen-titel">Kurz gefragt.<br /><em>Klar geantwortet.</em></h2>
        <div className="sn-reveal">
          {FRAGEN.map((f) => (
            <details className="sn-frage" key={f.frage}>
              <summary>
                <h3>{f.frage}</h3>
                <span className="sn-frage-plus" aria-hidden="true" />
              </summary>
              <p>{f.antwort}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
