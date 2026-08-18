/*
  Datenbasis der Cocktailbar-Entwuerfe.

  Nur Belegbares. "Bis zu 20 verschiedene Cocktails" und "Individuell fuer
  dein Event" stehen auf dem Banner der Theke im Foto theke-vor-ort.webp —
  das ist Frankies eigenes Material, keine Erfindung. Der Barkeeper hinter
  der Theke ist auf bambustheke.webp zu sehen. Campingplatz Kalberschnacke
  ist eine der Referenzen.

  Was NICHT drinsteht, weil es nicht bestaetigt ist: Glaeser, Eis, Zutaten,
  alkoholfreie Varianten, Aufbauzeit, Mindestgaestezahl. Sobald das geklaert
  ist, gehoert es hier rein — nicht vorher.
*/
export const ORTE = [
  {
    bild: '/theke-vor-ort.webp',
    pos: 'center 62%',
    ort: 'Campingplatz Kalberschnacke',
    zusatz: 'Im Freien, auf der Wiese aufgebaut',
    alt: 'Die Bambustheke von Frankies Eventservice auf einer Wiese am Campingplatz',
  },
  {
    bild: '/bambustheke.webp',
    pos: 'center 55%',
    ort: 'Unter dem Pavillon',
    zusatz: 'Mit Barkeeper hinter der Theke',
    alt: 'Bambustheke unter einem Pavillon, ein Barkeeper steht dahinter',
  },
  {
    bild: '/cocktail.webp',
    pos: 'center 50%',
    ort: 'Frisch gemixt',
    zusatz: 'Bis zu 20 verschiedene Cocktails',
    alt: 'Frisch zubereiteter Cocktail mit Limette auf der Theke',
  },
]

export const DABEI = [
  'Bambustheke aus echtem Bambus',
  'Barkeeper hinter der Theke',
  'Bis zu 20 verschiedene Cocktails',
  'Zusammenstellung individuell fürs Event',
  'Aufbau und Abbau vor Ort',
  'Garten, Wiese, Hof oder Halle',
]
