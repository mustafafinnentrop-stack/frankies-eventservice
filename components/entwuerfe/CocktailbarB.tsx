import Image from 'next/image'

/*
  Entwurf B — die grosse Zahl.

  Maximal reduziert: eine einzige Angabe, gross gesetzt, daneben das
  Cocktail-Foto. "Bis zu 20 verschiedene Cocktails" steht auf dem Banner
  der Theke, ist also Frankies eigene Angabe. Alles andere faellt weg —
  der Abschnitt darueber zeigt die Theke bereits.
*/
export default function CocktailbarB() {
  return (
    <div className="cb-b">
      <div className="cb-b-zahl">
        <span className="cb-b-gross">20</span>
        <span className="cb-b-einheit">verschiedene Cocktails</span>
        <p className="cb-b-text">
          Klassiker und eigene Kreationen, frisch an der Theke gemixt.
          Die Zusammenstellung stimmen wir vorher auf Ihr Event ab.
        </p>
      </div>
      <div className="cb-b-bild">
        <Image src="/cocktail.webp"
               alt="Frisch zubereiteter Cocktail mit Limette auf der Theke"
               width={900} height={900}
               sizes="(max-width: 900px) 90vw, 480px" quality={65}
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  )
}
