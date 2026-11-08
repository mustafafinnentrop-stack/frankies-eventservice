/*
  Ratgeber-Links von den Leistungsseiten in den Blog (08.11.2026).

  Warum: Der Blog auf blog.frankies-eventservice.de war von der Hauptseite
  nur ueber die Blog-Uebersicht im Fussbereich erreichbar. Die Search
  Console zeigte alle Artikel als "Gefunden – zurzeit nicht indexiert".
  Direkte Links von den Leistungsseiten geben Google einen Weg zu den
  passenden Artikeln und ordnen sie thematisch zu.

  Bewusst nur zwei bis drei Artikel pro Seite, nur solche, die genau zum
  Thema der Seite passen — sonst verwaessert es die Verkaufsseiten.
  Ankertext ist eine kurze, sprechende Fassung des Artikeltitels.
  Faellt ein Artikel im Blog weg, den Eintrag hier entfernen (sonst 404).
*/
const BLOG = 'https://blog.frankies-eventservice.de/blog/'

export type RatgeberThema = 'schuetzenfest' | 'hochzeit' | 'cocktailbar' | 'kreis-olpe'

const RATGEBER: Record<RatgeberThema, { slug: string; titel: string }[]> = {
  schuetzenfest: [
    { slug: 'schutzenfest-sauerland-getranke', titel: 'Getränkeservice für Schützenfeste im Sauerland' },
    { slug: 'schutzenfest-planung', titel: 'Schützenfest planen: Ablauf von A bis Z' },
    { slug: 'zapfanlage-veranstaltung-auswahlen', titel: 'Die richtige Zapfanlage für Ihr Fest' },
  ],
  hochzeit: [
    { slug: 'getrankeplan-hochzeit', titel: 'Getränkeplan für die Hochzeit: Mengen und Checkliste' },
    { slug: 'hochzeitsbar-sauerland-ideen', titel: 'Ideen für die Hochzeitsbar im Sauerland' },
    { slug: 'sektempfang-hochzeit', titel: 'Sektempfang zur Hochzeit planen' },
  ],
  cocktailbar: [
    { slug: 'cocktailbar-geburtstag-ideen', titel: 'Cocktailbar zum Geburtstag: Ideen' },
    { slug: 'cocktailcatering-firmenfeier-ideen', titel: 'Cocktailcatering für die Firmenfeier' },
    { slug: 'alkoholfreie-cocktails-hochzeit', titel: 'Alkoholfreie Cocktails zur Hochzeit' },
  ],
  'kreis-olpe': [
    { slug: 'getrankeservice-auswahlen', titel: 'Getränkeservice auswählen: Checkliste für das Sauerland' },
    { slug: 'dorffest-organisieren', titel: 'Dorffest organisieren: Fahrplan für Vereine' },
    { slug: 'getrankeservice-firmenfeier-planen', titel: 'Getränkeservice für die Firmenfeier planen' },
  ],
}

export default function Ratgeber({ thema }: { thema: RatgeberThema }) {
  return (
    /* Bewusst kein <nav>: globals.css stylt jedes nav als feste Kopfleiste. */
    <div role="navigation" aria-label="Ratgeber aus unserem Blog" style={{ marginBottom: '3rem' }}>
      <p className="section-label" style={{ marginBottom: '1.5rem' }}>Ratgeber aus unserem Blog</p>
      <ul style={{ listStyle: 'none', margin: '0 auto', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.9rem', maxWidth: '36rem' }}>
        {RATGEBER[thema].map((a) => (
          <li key={a.slug}>
            <a
              href={BLOG + a.slug}
              style={{ color: 'var(--color-text)', fontSize: '0.95rem', textDecoration: 'underline', textDecorationColor: 'rgba(200,164,78,0.5)', textUnderlineOffset: '0.3em', lineHeight: 1.5 }}
            >
              {a.titel}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
