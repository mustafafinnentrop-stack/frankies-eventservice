/*
  Der Text der AGB, Wort fuer Wort aus der vom Betreiber freigegebenen
  Fassung uebernommen (PDF "Frankies AGB, Stand 07.09.2026").

  Warum als Datei und nicht zweimal als JSX: Der Text stand vorher doppelt
  im Projekt — auf /agb und im Rechts-Overlay, das aus dem Footer aufgeht.
  Zwei Fassungen desselben Vertragstextes sind bei Rechtstexten kein
  Schoenheitsfehler, sondern ein Risiko: Wer eine aendert, veroeffentlicht
  zwei sich widersprechende Vertragsgrundlagen. Ab jetzt lesen beide
  Ansichten aus dieser Datei.

  Wer den Text aendert: nur nach einer neuen freigegebenen Fassung, dann
  STAND mitziehen. Nicht umformulieren, nicht kuerzen, nicht "gluecklicher"
  schreiben — das hier ist der Vertragstext, kein Werbetext.
*/

/** Datum der Fassung, wie es im Dokument steht. */
export const STAND = '7. September 2026'

export type Abschnitt = {
  /** Nummer wie im Dokument (1-15). */
  nr: number
  /** Ueberschrift ohne die Nummer. */
  titel: string
  /** Absaetze in der Reihenfolge des Dokuments. */
  absaetze: string[]
}

export const ABSCHNITTE: Abschnitt[] = [
  {
    nr: 1,
    titel: 'Geltungsbereich',
    absaetze: [
      'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für Verträge über Leistungen von Frankies Eventservice, Inhaber Mustafa Yildirim, Hachener Str. 7, 57368 Lennestadt (nachfolgend „Frankies“), insbesondere über mobilen Getränkeservice, mobile Cocktailbar, Theken- und Barservice, Servicepersonal sowie die Bereitstellung und Vermietung von veranstaltungsbezogenem Equipment.',
      'Soweit ein individuelles Angebot oder eine Auftragsbestätigung von diesen AGB abweichende Regelungen enthält, gehen die individuell vereinbarten Regelungen vor. Individuelle Abreden bleiben unberührt.',
      'Gegenüber Unternehmern gelten entgegenstehende oder ergänzende Geschäftsbedingungen des Auftraggebers nur, wenn Frankies ihrer Geltung ausdrücklich zugestimmt hat.',
    ],
  },
  {
    nr: 2,
    titel: 'Angebot, Leistungsumfang und Vertragsschluss',
    absaetze: [
      'Art, Umfang, Veranstaltungsdatum, Einsatzzeiten, Preise und gegebenenfalls Mindestabnahmen ergeben sich aus dem jeweiligen Angebot. Leistungen, die dort nicht aufgeführt sind, sind nur geschuldet, wenn sie zusätzlich vereinbart werden.',
      'Angebote sind, soweit im Angebot keine Bindungsfrist genannt ist, freibleibend. Ein Vertrag kommt zustande, wenn der Auftraggeber das Angebot annimmt und Frankies die Annahme bestätigt oder mit der vereinbarten Leistung beginnt.',
      'Änderungs- und Ergänzungswünsche nach Vertragsschluss werden berücksichtigt, soweit sie organisatorisch und tatsächlich möglich sind. Hierdurch entstehende Mehrkosten werden vor Ausführung abgestimmt.',
    ],
  },
  {
    nr: 3,
    titel: 'Mitwirkung des Auftraggebers und Veranstaltungsort',
    absaetze: [
      'Der Auftraggeber stellt rechtzeitig alle für die Durchführung erforderlichen Informationen zur Verfügung, insbesondere Ansprechpartner, Veranstaltungsort, Zufahrts- und Aufbauinformationen, erwartete Gästezahl sowie besondere örtliche Vorgaben.',
      'Soweit für die gebuchte Leistung Strom, Wasser, geeignete Aufstellflächen, Zufahrt, Park- oder Ladeflächen erforderlich sind, stellt der Auftraggeber diese im vereinbarten Umfang zugänglich und nutzbar bereit, sofern im Angebot nichts anderes geregelt ist.',
      'Behördliche Genehmigungen, veranstaltungsbezogene Erlaubnisse und die allgemeine Verkehrssicherung des Veranstaltungsortes obliegen dem Veranstalter bzw. dem hierfür verantwortlichen Auftraggeber, soweit sie nicht ausdrücklich von Frankies übernommen wurden.',
    ],
  },
  {
    nr: 4,
    titel: 'Preise, Umsatzsteuer und Zahlung',
    absaetze: [
      'Es gelten die im Angebot ausgewiesenen Preise. Gegenüber Verbrauchern werden Preise einschließlich der gesetzlichen Umsatzsteuer ausgewiesen. Gegenüber Unternehmern können Preise als Nettopreise zuzüglich gesetzlicher Umsatzsteuer ausgewiesen werden.',
      'Sofern im Angebot nichts anderes vereinbart ist, ist bei Vertragsschluss eine Anzahlung von 25 % der vereinbarten Gesamtvergütung fällig. Der Restbetrag ist nach Leistungserbringung und Rechnungsstellung innerhalb von 7 Kalendertagen ohne Abzug zu zahlen.',
      'Bei Zahlungsverzug gelten die gesetzlichen Vorschriften. Frankies ist berechtigt, nach Maßgabe der gesetzlichen Voraussetzungen angemessene Mahnkosten zu verlangen.',
    ],
  },
  {
    nr: 5,
    titel: 'Einsatzzeiten, Mehrstunden und Wartezeiten',
    absaetze: [
      'Die vereinbarte Einsatzzeit ergibt sich aus dem Angebot. Verlängert der Auftraggeber die Leistung am Veranstaltungstag, werden zusätzliche Zeiten nach dem im Angebot vereinbarten Stunden- oder Mehrstundenpreis berechnet.',
      'Nicht von Frankies verursachte erhebliche Wartezeiten, die den vereinbarten Ablauf verzögern und Personal oder Equipment binden, können nur dann zusätzlich berechnet werden, wenn der Auftraggeber hierauf hingewiesen wurde und die zusätzliche Vergütung vor Ort bestätigt oder die Fortsetzung der Leistung ausdrücklich verlangt hat.',
    ],
  },
  {
    nr: 6,
    titel: 'Personal und Organisation',
    absaetze: [
      'Das von Frankies eingesetzte Personal wird durch Frankies organisiert und bleibt in dessen betriebliche Abläufe eingegliedert. Die fachliche und disziplinarische Leitung verbleibt bei Frankies. Absprachen zum Ablauf erfolgen mit der von Frankies benannten verantwortlichen Person.',
      'Der Einsatz stellt keine Arbeitnehmerüberlassung dar, soweit die Tätigkeit entsprechend dem vereinbarten Dienstleistungsumfang durch Frankies organisiert und gesteuert wird.',
      'Frankies darf zur Leistungserbringung geeignete Erfüllungsgehilfen oder Subunternehmer einsetzen, sofern hierdurch berechtigte Interessen des Auftraggebers nicht beeinträchtigt werden.',
    ],
  },
  {
    nr: 7,
    titel: 'Getränke, Mindestabnahmen und Kommissionsware',
    absaetze: [
      'Soweit eine Mindestabnahme, Getränkepauschale, Stückzahl oder ein Mindestumsatz vereinbart wurde, ist diese Vereinbarung Bestandteil der Vergütung, unabhängig davon, ob die entsprechende Menge vollständig abgerufen wird.',
      'Getränke auf Kommission werden nur zurückgenommen, wenn dies ausdrücklich vereinbart wurde. Rückgabefähig sind ausschließlich unbeschädigte, ungeöffnete und handelsfähige Einheiten innerhalb der vereinbarten Rückgabefrist. Abweichende Regelungen im Angebot gehen vor.',
      'Bei alkoholischen Getränken beachtet Frankies die gesetzlichen Jugendschutzbestimmungen. Die Ausgabe kann insbesondere an Minderjährige, erkennbar stark alkoholisierte Personen oder bei sonstigen sicherheitsrelevanten Gründen verweigert werden.',
    ],
  },
  {
    nr: 8,
    titel: 'Equipment, Gläser und Mietgegenstände',
    absaetze: [
      'Überlassenes Equipment bleibt Eigentum von Frankies bzw. des jeweiligen Eigentümers. Der Auftraggeber behandelt Mietgegenstände pfleglich und schützt sie während der vereinbarten Überlassungszeit vor Beschädigung, Verlust und unbefugter Nutzung.',
      'Für Schäden, die der Auftraggeber oder ihm rechtlich zurechenbare Personen schuldhaft verursachen, können die erforderlichen Reparaturkosten oder bei wirtschaftlichem Totalschaden die angemessenen Ersatzbeschaffungskosten berechnet werden. Normale Abnutzung ist hiervon ausgenommen.',
      'Bei Rückgabe wird der Zustand des Equipments geprüft. Fehlmengen oder erkennbare Schäden sollen möglichst gemeinsam dokumentiert werden.',
    ],
  },
  {
    nr: 9,
    titel: 'Auf- und Abbau, Zugang und Sicherheit',
    absaetze: [
      'Auf- und Abbau erfolgen innerhalb der im Angebot vereinbarten Leistungen und Zeitfenster. Der Auftraggeber gewährleistet, dass der Veranstaltungsort zu den abgestimmten Zeiten zugänglich ist.',
      'Frankies kann den Aufbau oder Betrieb unterbrechen oder ablehnen, wenn am Veranstaltungsort konkrete Gefahren für Personen, Equipment oder einen sicheren Betrieb bestehen und diese nicht kurzfristig beseitigt werden können. Gesetzliche Rechte beider Parteien bleiben unberührt.',
    ],
  },
  {
    nr: 10,
    titel: 'Stornierung durch den Auftraggeber',
    absaetze: [
      'Der Auftraggeber kann den Vertrag vor Leistungsbeginn stornieren. Sofern im individuellen Angebot keine andere Stornoregelung getroffen wurde, kann Frankies als pauschalierten Ausgleich folgende Anteile der vereinbarten Gesamtvergütung verlangen: bis 60 Tage vor Leistungsbeginn 25 %, bis 30 Tage vor Leistungsbeginn 50 %, bis 14 Tage vor Leistungsbeginn 75 %, weniger als 14 Tage vor Leistungsbeginn 90 %.',
      'Dem Auftraggeber bleibt ausdrücklich der Nachweis vorbehalten, dass kein Schaden oder ein wesentlich geringerer Schaden entstanden ist. Frankies bleibt der Nachweis eines höheren tatsächlich entstandenen Schadens vorbehalten, soweit dies gesetzlich zulässig ist; ersparte Aufwendungen werden angerechnet.',
      'Bereits entstandene und nicht mehr stornierbare, ausschließlich für den Auftraggeber veranlasste Fremdkosten können zusätzlich berechnet werden, soweit sie nicht bereits durch die Stornopauschale abgegolten sind und Frankies deren Entstehung nachweist.',
    ],
  },
  {
    nr: 11,
    titel: 'Höhere Gewalt, Wetter und Leistungshindernisse',
    absaetze: [
      'Kann eine Veranstaltung oder Leistung aufgrund eines von keiner Partei zu vertretenden, bei Vertragsschluss nicht vorhersehbaren Ereignisses nicht oder nur eingeschränkt durchgeführt werden, stimmen sich die Parteien über eine zumutbare Verschiebung, Anpassung oder Teilaufhebung ab.',
      'Bei Außenveranstaltungen kann Frankies Leistungen aus Sicherheitsgründen vorübergehend einstellen, wenn konkrete Gefahren etwa durch Sturm, Starkregen, Gewitter oder vergleichbare Witterung bestehen. Soweit möglich, wird die Leistung nach Wegfall der Gefahr fortgesetzt.',
      'Gesetzliche Rechte bei Unmöglichkeit, Rücktritt oder Wegfall der Geschäftsgrundlage bleiben unberührt.',
    ],
  },
  {
    nr: 12,
    titel: 'Haftung',
    absaetze: [
      'Frankies haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.',
      'Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht haftet Frankies nur auf den vertragstypischen, bei Vertragsschluss vorhersehbaren Schaden. Wesentliche Vertragspflichten sind Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf.',
      'Im Übrigen ist die Haftung für leicht fahrlässig verursachte Schäden ausgeschlossen, soweit gesetzlich zulässig. Zwingende gesetzliche Haftung, insbesondere nach dem Produkthaftungsgesetz, bleibt unberührt.',
    ],
  },
  {
    nr: 13,
    titel: 'Datenschutz',
    absaetze: [
      'Personenbezogene Daten werden zur Anbahnung und Durchführung des Vertrages sowie zur Erfüllung gesetzlicher Pflichten verarbeitet. Ergänzende Informationen ergeben sich aus der Datenschutzerklärung unter frankies-eventservice.de/datenschutz.',
    ],
  },
  {
    nr: 14,
    titel: 'Verbraucherrecht',
    absaetze: [
      'Soweit der Auftraggeber Verbraucher ist, bleiben zwingende gesetzliche Verbraucherschutzrechte unberührt. Diese AGB beschränken keine Rechte, die dem Verbraucher nach zwingendem Recht zustehen.',
      'Soweit für einen konkreten Vertrag gesetzlich ein Widerrufsrecht besteht, erhält der Verbraucher die gesetzlich erforderlichen Informationen gesondert. Ob ein Widerrufsrecht besteht oder gesetzlich ausgeschlossen ist, richtet sich nach Art und Umständen des jeweiligen Vertrages.',
    ],
  },
  {
    nr: 15,
    titel: 'Schlussbestimmungen',
    absaetze: [
      'Es gilt das Recht der Bundesrepublik Deutschland. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als dadurch der Schutz zwingender Bestimmungen des Staates des gewöhnlichen Aufenthalts des Verbrauchers nicht entzogen wird.',
      'Ist der Auftraggeber Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen, ist - soweit gesetzlich zulässig - Gerichtsstand der Sitz von Frankies Eventservice.',
      'Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleiben die übrigen Bestimmungen wirksam. An die Stelle der unwirksamen Bestimmung treten die gesetzlichen Vorschriften.',
    ],
  },
]

/* Die Fusszeile des Dokuments — dieselben Angaben wie im Impressum, hier
   aber Teil der freigegebenen Fassung und deshalb woertlich uebernommen. */
export const ANBIETER = 'Frankies Eventservice · Inhaber Mustafa Yildirim · Hachener Str. 7 · 57368 Lennestadt'
export const ANBIETER_KONTAKT = {
  telefon: '0151 42840916',
  telefonLink: '+4915142840916',
  email: 'info@frankies-eventservice.de',
  web: 'frankies-eventservice.de',
  ustId: 'DE354807768',
}
