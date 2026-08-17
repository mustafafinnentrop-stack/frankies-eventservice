import Icon from './Icon'

/*
  Leistungen — die Bausteine, die tatsaechlich gebucht werden.

  Vorher standen hier vier Karten nach Anlass (Schuetzenfest, Hochzeit,
  Cocktailbar, Firmenfest) mit Werbetext ohne Aussage. Die Anlaesse haben
  eigene Unterseiten; hier gehoert hin, was konkret geliefert wird — und
  zwar das, was bei den Veranstaltungen unter /#referenzen auch wirklich
  geliefert wurde. Jeder Baustein hier hat dort mindestens eine Entsprechung.
*/
const BAUSTEINE = [
  {
    icon: 'counter',
    titel: 'Thekenservice & Zapfanlage',
    text: 'Theke, Zapftechnik und Personal für Schützen- und Dorffeste. Beim Schützenfest Berghausen waren dafür 18 Leute im Einsatz.',
  },
  {
    icon: 'cocktail',
    titel: 'Mobile Cocktailbar',
    text: 'Bambustheke und frisch zubereitete Cocktails, aufgebaut wo Sie feiern — auf dem Campingplatz genauso wie auf der Firmenfeier.',
  },
  {
    icon: 'box',
    titel: 'Getränkecatering',
    text: 'Wir planen die Menge, liefern, kühlen und schenken aus. Sie kaufen nichts ein und bleiben auf nichts sitzen.',
  },
  {
    icon: 'van',
    titel: 'Catering & Foodtruck',
    text: 'Essen und Getränke aus einer Hand, wenn beides zusammengehört. Für die Westmark-Firmenfeier mit 1.200 geladenen Gästen ist beides bei uns gebucht.',
  },
  {
    icon: 'team',
    titel: 'Servicepersonal',
    text: 'Eingespielte Kräfte für Ausschank, Empfang und Abräumen. Auch dann, wenn Sie Theke und Getränke selbst stellen.',
  },
  {
    icon: 'snack',
    titel: 'Kaffeestation',
    text: 'Für den Nachmittag nach der Trauung oder den zweiten Teil des Abends. Als Nächstes bei der Hochzeit auf Schloss Melschede.',
  },
]

export default function Leistungen() {
  return (
    <section id="leistungen">
      <div className="section-container">
        <div className="reveal grid-text">
          <p className="section-label" style={{ margin: '0 auto 1rem' }}>Unsere Leistungen</p>
          <h2 className="section-title" style={{ margin: '0 auto 1.5rem' }}>Was wir mitbringen</h2>
          <p className="section-text" style={{ margin: '0 auto 3rem' }}>
            Sie buchen nicht ein festes Paket, sondern die Bausteine, die Sie brauchen.
            Was davon sinnvoll ist, klären wir vorher am Telefon — und richten uns nach
            Gästezahl, Dauer und Ort.
          </p>
        </div>
        <div className="services-grid stagger-children reveal">
          {BAUSTEINE.map((b) => (
            <div key={b.titel} className="service-card reveal">
              <div className="service-icon"><Icon name={b.icon} size={26} /></div>
              <h3>{b.titel}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
