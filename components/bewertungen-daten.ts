/*
  Die Google-Bewertungen als reine Daten. Vorher standen sie in
  Testimonials.tsx; wer nur die Zahl brauchte (die Startseite), zog damit
  die komplette Bewertungskarten-Komponente ins Bundle — gemessen 47 kB.
*/
/* Ausschliesslich echte Google-Bewertungen von Frankies-Eventservice.
   Stand: 5,0 aus 2 Rezensionen. Kommt eine neue dazu, ist das hier eine
   Zeile mehr — nichts anderes muss angefasst werden.
   Kein Avatar-Bild: Die Profilbilder liegen bei Google und duerfen nicht
   von dort eingebunden werden. Die Komponente zeigt dann den Anfangs-
   buchstaben, das ist ihr eingebauter Rueckfall. */
export const BEWERTUNGEN = [
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
