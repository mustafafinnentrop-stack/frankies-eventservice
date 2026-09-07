/*
  Der Text der AGB, Wort fuer Wort aus der vom Betreiber freigegebenen
  Fassung uebernommen (PDF "Frankies AGB, Stand 08.09.2026").

  Das ist dieselbe Fassung, die der Betreiber seinen Kunden mit jedem
  Angebot per E-Mail schickt. Webseite und Angebots-Anhang muessen
  deckungsgleich sein — sonst gelten zwei verschiedene Vertragstexte,
  je nachdem, wo der Kunde hinschaut.

  Warum als Datei und nicht zweimal als JSX: Der Text stand vorher doppelt
  im Projekt — auf /agb und im Rechts-Overlay. Zwei Fassungen desselben
  Vertragstextes sind bei Rechtstexten kein Schoenheitsfehler, sondern ein
  Risiko: Wer eine aendert, veroeffentlicht zwei sich widersprechende
  Vertragsgrundlagen. Beide Ansichten lesen aus dieser Datei.

  Wer den Text aendert: nur nach einer neuen freigegebenen Fassung, dann
  STAND mitziehen. Nicht umformulieren, nicht kuerzen, nicht "gluecklicher"
  schreiben — das hier ist der Vertragstext, kein Werbetext.
*/

/** Datum der Fassung, wie es im Dokument steht. */
export const STAND = '08.09.2026'

export type Abschnitt = {
  /** Paragrafennummer wie im Dokument (1-16). */
  nr: number
  /** Ueberschrift ohne das Paragrafenzeichen. */
  titel: string
  /** Absaetze in der Reihenfolge des Dokuments, mit ihrer Nummerierung. */
  absaetze: string[]
}

export const ABSCHNITTE: Abschnitt[] = [
  {
    nr: 1,
    titel: 'Geltungsbereich und Vertragspartner',
    absaetze: [
      '(1) Diese Allgemeinen Geschäftsbedingungen gelten für Verträge zwischen Frankies Eventservice, Inhaber Mustafa Yildirim, Hachener Str. 7, 57368 Lennestadt (nachfolgend „Frankies“), und seinen Kunden über die im jeweiligen Angebot oder in der Auftragsbestätigung vereinbarten Leistungen.',
      '(2) Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft überwiegend zu Zwecken abschließt, die weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer ist eine natürliche oder juristische Person oder rechtsfähige Personengesellschaft, die bei Abschluss des Vertrags in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.',
      '(3) Individuelle Vereinbarungen im Angebot, in der Auftragsbestätigung oder sonst ausdrücklich ausgehandelte Vereinbarungen gehen diesen AGB vor. Abweichende Geschäftsbedingungen eines Unternehmers gelten nur, wenn Frankies ihrer Geltung ausdrücklich zugestimmt hat.',
    ],
  },
  {
    nr: 2,
    titel: 'Vertragsgegenstand und Leistungsumfang',
    absaetze: [
      '(1) Maßgeblich für Art und Umfang der geschuldeten Leistungen ist das jeweilige Angebot bzw. die Auftragsbestätigung.',
      '(2) Vereinbart werden können insbesondere mobile Cocktailbar, Getränkeservice, Theken- und Ausschankservice, Service- und Veranstaltungspersonal, Auf- und Abbau, Lieferung und Bereitstellung von Getränken sowie Vermietung oder Bereitstellung von Eventequipment.',
      '(3) Eventequipment kann insbesondere Theken, Zapf- und Kühltechnik, Kühlanhänger, Gläser, Mobiliar, Dekoration, Licht- und Tontechnik, Fotoboxen, Hüpfburgen, Fun-Food-Module und sonstige Veranstaltungsgegenstände umfassen, soweit diese im konkreten Angebot aufgeführt sind.',
      '(4) Speisen, Catering oder weitere Veranstaltungsleistungen sind nur geschuldet, wenn sie ausdrücklich vereinbart wurden.',
      '(5) Setzt Frankies zur Vertragserfüllung Erfüllungsgehilfen, Subunternehmer oder Kooperationspartner ein, bleibt Frankies Vertragspartner des Kunden, soweit im Angebot nicht ausdrücklich kenntlich gemacht wird, dass eine Leistung lediglich vermittelt wird und ein eigener Vertrag zwischen Kunde und Drittanbieter zustande kommt.',
    ],
  },
  {
    nr: 3,
    titel: 'Angebot und Vertragsschluss',
    absaetze: [
      '(1) Angebote sind freibleibend, sofern sie nicht ausdrücklich als verbindlich bezeichnet sind. Ein Vertrag kommt durch Annahme eines verbindlichen Angebots, durch Auftragsbestätigung oder durch sonstige eindeutige Vereinbarung der Parteien zustande.',
      '(2) Änderungen und Erweiterungen nach Vertragsschluss, insbesondere hinsichtlich Gästezahl, Veranstaltungszeit, Getränkemenge, Personal, Aufbau oder Equipment, bedürfen einer Vereinbarung. Zusätzliche Leistungen werden nach den hierfür vereinbarten Preisen oder, soweit keine Preisabrede besteht, nach dem hierfür erforderlichen und üblichen Aufwand berechnet.',
      '(3) Bei Verbrauchern werden diese AGB nur einbezogen, wenn der Verbraucher bei Vertragsschluss auf ihre Geltung hingewiesen wurde, in zumutbarer Weise von ihrem Inhalt Kenntnis nehmen konnte und mit ihrer Geltung einverstanden ist.',
    ],
  },
  {
    nr: 4,
    titel: 'Preise, Anzahlung und Zahlung',
    absaetze: [
      '(1) Gegenüber Verbrauchern werden Gesamtpreise einschließlich gesetzlicher Umsatzsteuer ausgewiesen. Gegenüber Unternehmern können Preise netto zuzüglich gesetzlicher Umsatzsteuer angegeben werden.',
      '(2) Eine Anzahlung wird nur geschuldet, wenn sie im Angebot oder in der Auftragsbestätigung vereinbart ist. Höhe und Fälligkeit ergeben sich aus der jeweiligen Vereinbarung.',
      '(3) Soweit nichts anderes vereinbart ist, wird die Vergütung nach Erbringung der vereinbarten Leistung und Zugang der Rechnung fällig. Für Zahlungsverzug gelten die gesetzlichen Vorschriften.',
    ],
  },
  {
    nr: 5,
    titel: 'Personal und Einsatzzeiten',
    absaetze: [
      '(1) Soweit Frankies Personal zur Durchführung einer vereinbarten Serviceleistung einsetzt, erfolgt der Personaleinsatz unter der organisatorischen Verantwortung von Frankies. Das Personal wird zur Erfüllung der vereinbarten Leistung eingesetzt; eine Arbeitnehmerüberlassung ist nicht Vertragsgegenstand.',
      '(2) Vereinbarte Einsatzzeiten und Personalstunden bilden den kalkulierten Leistungsumfang. Eine Verlängerung auf Wunsch des Kunden setzt die Zustimmung von Frankies voraus und wird nach der vereinbarten Mehrstundenregelung vergütet.',
      '(3) Zwingende arbeitszeit-, jugendschutz- und sonstige öffentlich-rechtliche Vorschriften bleiben unberührt.',
    ],
  },
  {
    nr: 6,
    titel: 'Getränke, Mindestabnahmen und Kommissionsware',
    absaetze: [
      '(1) Getränkesortiment, Mengen, Preise und etwaige Mindestabnahmen ergeben sich aus dem jeweiligen Angebot.',
      '(2) Eine Rücknahme nicht verbrauchter Getränke erfolgt nur, wenn ausdrücklich Kommissionslieferung vereinbart wurde. Rücknahmefähig sind nur ungeöffnete, unbeschädigte und handelsfähige Gebinde. Sonderbestellungen, angebrochene Gebinde und ausdrücklich von der Rücknahme ausgeschlossene Ware werden nicht gutgeschrieben.',
      '(3) Mengenempfehlungen oder Verbrauchsprognosen beruhen auf den vom Kunden mitgeteilten Umständen, insbesondere Gästezahl, Veranstaltungsdauer und Sortiment. Eine bestimmte tatsächliche Verbrauchsmenge ist nur geschuldet oder garantiert, wenn dies ausdrücklich vereinbart wurde.',
    ],
  },
  {
    nr: 7,
    titel: 'Miet- und Leihgegenstände',
    absaetze: [
      '(1) Überlassene Gegenstände bleiben Eigentum von Frankies bzw. des jeweiligen Eigentümers und dürfen nur vertragsgemäß genutzt werden.',
      '(2) Der Kunde hat die Gegenstände pfleglich zu behandeln und nach Ende der vereinbarten Nutzungszeit vollständig zurückzugeben oder zur vereinbarten Abholung bereitzuhalten.',
      '(3) Bei Verlust oder vom Kunden zu vertretender Beschädigung gelten die gesetzlichen Schadensersatzregeln. Normale vertragsgemäße Abnutzung stellt keinen ersatzpflichtigen Schaden dar.',
      '(4) Eine Kaution wird nur geschuldet, wenn sie ausdrücklich vereinbart wurde. Sie wird nach ordnungsgemäßer Rückgabe unter Berücksichtigung berechtigter Gegenansprüche zurückgezahlt.',
    ],
  },
  {
    nr: 8,
    titel: 'Pflichten des Kunden und Veranstaltungsort',
    absaetze: [
      '(1) Der Kunde stellt die im Angebot bezeichneten Voraussetzungen am Veranstaltungsort rechtzeitig zur Verfügung. Hierzu können insbesondere geeignete und zulässige Stellflächen, Zufahrtsmöglichkeiten, Strom- und Wasseranschlüsse sowie notwendige Zugangs- und Aufbauzeiten gehören.',
      '(2) Der Kunde informiert Frankies rechtzeitig über Umstände, die die Durchführung beeinflussen können, insbesondere Zufahrtsbeschränkungen, Treppen, lange Transportwege, behördliche Auflagen, besondere Sicherheitsvorgaben oder fehlende Anschlüsse.',
      '(3) Entstehen durch einen vom Kunden zu vertretenden Verstoß gegen diese Pflichten notwendige zusätzliche Aufwendungen, kann Frankies deren Ersatz nach den gesetzlichen Vorschriften verlangen.',
    ],
  },
  {
    nr: 9,
    titel: 'Außenveranstaltungen und Wetter',
    absaetze: [
      '(1) Bei Außenveranstaltungen sorgt der Kunde, soweit nicht ausdrücklich von Frankies übernommen, für einen geeigneten und sicheren Aufstell- und Arbeitsbereich sowie den für die vereinbarte Leistung erforderlichen Wetterschutz.',
      '(2) Besteht aufgrund konkreter Wetter-, Sicherheits- oder Behördenbedingungen eine erhebliche Gefahr für Personen oder Sachen oder ist die Durchführung rechtlich unzulässig, darf Frankies betroffene Leistungen bis zur Wiederherstellung sicherer Bedingungen aussetzen. Frankies informiert den Kunden hierüber unverzüglich und prüft zumutbare Alternativen.',
      '(3) Vergütungs-, Rücktritts- und Erstattungsfolgen richten sich in diesen Fällen nach den gesetzlichen Vorschriften und den Umständen des Einzelfalls.',
    ],
  },
  {
    nr: 10,
    titel: 'Absage oder Kündigung durch den Kunden',
    absaetze: [
      '(1) Gesetzliche Kündigungs-, Rücktritts- und Widerrufsrechte bleiben unberührt.',
      '(2) Sagt der Kunde eine verbindlich gebuchte Veranstaltung ab, ohne dass ein gesetzliches oder vertraglich vereinbartes kostenfreies Lösungsrecht besteht, richten sich die Vergütungs- und Schadensersatzansprüche nach den gesetzlichen Vorschriften sowie nach einer im konkreten Angebot wirksam vereinbarten Stornoregelung.',
      '(3) Wird im Angebot eine pauschalierte Stornoentschädigung vereinbart, bleibt dem Kunden ausdrücklich der Nachweis gestattet, dass kein Schaden oder ein wesentlich geringerer Schaden entstanden ist. Ersparte Aufwendungen und eine anderweitige Verwendung frei gewordener Kapazitäten werden berücksichtigt.',
    ],
  },
  {
    nr: 11,
    titel: 'Höhere Gewalt und sonstige Leistungshindernisse',
    absaetze: [
      '(1) Für Leistungshindernisse gelten die gesetzlichen Vorschriften. Dies gilt insbesondere bei behördlichen Verboten, Naturereignissen, erheblichen Sicherheitslagen oder sonstigen von keiner Partei zu vertretenden Umständen.',
      '(2) Frankies informiert den Kunden unverzüglich über ein bekannt gewordenes wesentliches Leistungshindernis. Soweit möglich und zumutbar, stimmen die Parteien eine Ersatzlösung, Verlegung oder Anpassung der Leistung ab.',
      '(3) Zwingende gesetzliche Rechte des Kunden bleiben unberührt.',
    ],
  },
  {
    nr: 12,
    titel: 'Mängel und Beanstandungen',
    absaetze: [
      '(1) Es gelten die gesetzlichen Mängelrechte.',
      '(2) Der Kunde soll erkennbare Mängel während der Veranstaltung möglichst unverzüglich mitteilen, damit Frankies Gelegenheit zur Abhilfe erhält. Gesetzliche Rechte eines Verbrauchers werden durch eine unterlassene sofortige Anzeige nicht ausgeschlossen, soweit das Gesetz nichts anderes bestimmt.',
    ],
  },
  {
    nr: 13,
    titel: 'Haftung',
    absaetze: [
      '(1) Frankies haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, soweit diese auf einer schuldhaften Pflichtverletzung von Frankies, seinen gesetzlichen Vertretern oder Erfüllungsgehilfen beruhen.',
      '(2) Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht haftet Frankies auf den vertragstypischen, bei Vertragsschluss vorhersehbaren Schaden. Wesentliche Vertragspflichten sind Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Vertragspartner regelmäßig vertrauen darf.',
      '(3) Im Übrigen ist die Haftung für leicht fahrlässig verursachte Schäden ausgeschlossen, soweit gesetzlich zulässig. Zwingende gesetzliche Haftung, insbesondere nach dem Produkthaftungsgesetz, bleibt unberührt.',
    ],
  },
  {
    nr: 14,
    titel: 'Verbraucherverträge und Widerrufsrecht',
    absaetze: [
      '(1) Bei Verträgen mit Verbrauchern gelten die gesetzlichen Informationspflichten.',
      '(2) Für Verträge zur Lieferung von Speisen und Getränken sowie für weitere Dienstleistungen im Zusammenhang mit Freizeitbetätigungen besteht nach § 312g Abs. 2 Nr. 9 BGB kein Widerrufsrecht, wenn der Vertrag für die Erbringung einen spezifischen Termin oder Zeitraum vorsieht und die gesetzlichen Voraussetzungen der Ausnahme erfüllt sind.',
      '(3) Soweit im konkreten Fall ein gesetzliches Widerrufsrecht besteht, erhält der Verbraucher die gesetzlich erforderliche Widerrufsbelehrung und das Muster-Widerrufsformular gesondert.',
    ],
  },
  {
    nr: 15,
    titel: 'Datenschutz',
    absaetze: [
      'Frankies verarbeitet personenbezogene Daten im Rahmen der geltenden Datenschutzvorschriften. Ergänzende Informationen enthält die Datenschutzerklärung unter frankies-eventservice.de/datenschutz.',
    ],
  },
  {
    nr: 16,
    titel: 'Schlussbestimmungen',
    absaetze: [
      '(1) Es gilt deutsches Recht. Gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit hierdurch nicht der Schutz zwingender Bestimmungen des Staates des gewöhnlichen Aufenthalts entzogen wird.',
      '(2) Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, kann der Gerichtsstand am Sitz von Frankies vereinbart werden, soweit gesetzlich zulässig. Gegenüber Verbrauchern gelten die gesetzlichen Gerichtsstände.',
      '(3) Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung treten die gesetzlichen Vorschriften.',
    ],
  },
]

/* Die Fusszeile des Dokuments, Zeile fuer Zeile. */
export const ANBIETER_ZEILEN = [
  'Frankies Eventservice',
  'Inhaber: Mustafa Yildirim',
  'Hachener Str. 7, 57368 Lennestadt',
]
export const ANBIETER_KONTAKT = {
  email: 'info@frankies-eventservice.de',
  web: 'frankies-eventservice.de',
}
