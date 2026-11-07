/*
  Die Google-Bewertungen als reine Daten. Vorher standen sie in
  Testimonials.tsx; wer nur die Zahl brauchte (die Startseite), zog damit
  die komplette Bewertungskarten-Komponente ins Bundle — gemessen 47 kB.
*/
/* Ausschliesslich echte Google-Bewertungen von Frankies-Eventservice.
   Stand: 5,0 aus 3 Rezensionen (14.09.2026). Kommt eine neue dazu, ist das hier eine
   Zeile mehr — nichts anderes muss angefasst werden.
   Kein Avatar-Bild: Die Profilbilder liegen bei Google und duerfen nicht
   von dort eingebunden werden. Die Komponente zeigt dann den Anfangs-
   buchstaben, das ist ihr eingebauter Rueckfall. */
export const BEWERTUNGEN = [
  {
    id: 'marcus-korte',
    // Bei Google steht der Name klein geschrieben ("marcus korte"); hier
    // als Eigenname gesetzt. Text wortgleich, Screenshot vom 14.09.2026.
    name: 'Marcus Korte',
    avatar: '',
    text:
      'Mustafa und sein Team haben den Getränkeservice bei unserer Hochzeit ' +
      'übernommen. Alles lief genau nach Plan und sehr professionell ab. Das ' +
      'ganze Team war super kompetent und hat uns jeden Wunsch erfüllt.',
    rating: 5,
  },
  {
    id: 'carol-ann-stoecker',
    name: 'Carol-Ann Stöcker',
    avatar: '',
    text:
      'Sehr guter, zuverlässiger Service. Die Cocktails waren sehr lecker und die Bar, ' +
      'die aufgebaut wurde war modern und top ausgestattet. Alles autark, man muss sich ' +
      'um nichts kümmern. Der Chef und die Angestellte wären super freundlich. Definitiv ' +
      'eine Empfehlung!!! Wir würden euch jederzeit wieder buchen.',
    rating: 5,
  },
  {
    id: 'stefan-hoberg',
    name: 'Stefan Hoberg',
    avatar: '',
    // Diese Bewertung hat bei Google keinen Text, nur die Sterne. Das wird so
    // benannt, statt einen Text zu erfinden.
    text: 'Hat Frankies Eventservice bei Google mit der vollen Punktzahl bewertet — ohne Kommentar.',
    rating: 5,
  },
]

export const GOOGLE_PROFIL =
  'https://www.google.com/search?q=Frankies-Eventservice&kgmid=/g/11z1_pnp_3'

/* Gesamtnote und Anzahl laut Google-Profil, abgelesen vom Screenshot des
   Betreibers am 07.11.2026: 5,0 aus 8 Rezensionen. Oben stehen nur drei
   davon im Wortlaut; die Anzahl hier ist die von Google angezeigte.
   Bei jeder neuen Bewertung beide Werte nachziehen, sonst stimmt die
   Angabe auf der Seite nicht mehr (Irrefuehrung, § 5 UWG). */
export const GOOGLE_NOTE = '5,0'
export const GOOGLE_ANZAHL = 8
