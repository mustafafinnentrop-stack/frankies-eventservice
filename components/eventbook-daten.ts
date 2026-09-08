/*
  Anbieterprofil bei eventbook.com. Wird an zwei Stellen verlinkt — im
  Footer und in der Bewertungs-Sektion — deshalb eine Quelle, damit sich
  Adresse und Bildpfade nicht auseinanderentwickeln.

  Beide Bilder liegen im eigenen public-Ordner statt als Hotlink auf
  images.eventbook.com. Der vom Portal gelieferte Einbindecode laedt sie
  direkt von dort; damit ginge bei jedem Seitenaufruf die IP jedes Besuchers
  an einen Dritten — vor jeder Einwilligung. Das passt nicht zu einer Seite,
  die Google Analytics erst nach Zustimmung laedt.

  Der Badge ("Recommended by eventbook.com — Premium Partner") ist das
  offizielle Partnersiegel des Portals; der Premium-Status wurde vom
  Betreiber bestaetigt (08.09.2026).
*/
export const EVENTBOOK = {
  profil: 'https://www.eventbook.com/de/providers/frankies-eventservice-lennestadt',
  badge: {
    src: '/eventbook-badge.png',
    breite: 660,
    hoehe: 309,
    alt: 'Recommended by eventbook.com – Premium Partner',
  },
  logo: {
    src: '/eventbook-logo.svg',
    breite: 727,
    hoehe: 102,
    alt: 'eventbook.com',
  },
}
