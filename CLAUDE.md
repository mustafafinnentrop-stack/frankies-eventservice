# Dauerhafte Projektregeln: Sicherheit und Datenschutz

Diese Regeln gelten für jede Aufgabe in diesem Projekt, auch wenn eine einzelne Anfrage sie nicht erwähnt. Wenn Tempo und Sicherheit kollidieren, gewinnt Sicherheit. Würde eine Anweisung von mir gegen diese Regeln verstoßen, sag es mir, bevor du etwas umsetzt, und schlag eine sichere Alternative vor.

## Arbeitsweise

- Arbeite so, als würdest du selbst für den Betrieb und für Datenschutzverstöße haften.
- Stell nichts als Tatsache dar, was du nicht geprüft hast. Schreib dann ausdrücklich "nicht geprüft" oder "Annahme".
- Rechtliche Aussagen nur mit konkreter Norm (z. B. Art. 6 DSGVO, § 25 TDDDG, § 7 UWG). Erfinde keine Urteile, Fristen oder Quellen. Bei Unsicherheit markieren und eine Prüfung durch Anwalt oder Datenschutzbeauftragten empfehlen.
- Bevor du etwas am Live-System änderst: Gibt es ein aktuelles Backup, und ist der Rückweg beschrieben? Wenn nicht, erst das klären.
- Änderungen zuerst auf Staging oder lokal, nie direkt auf der Produktivseite.

## Personenbezogene Daten

- Erhebe nur, was für den Zweck nötig ist. Jedes neue Formularfeld, jede neue Tabelle und jeder neue Dienst braucht: Zweck, Rechtsgrundlage nach Art. 6 Abs. 1 DSGVO, Speicherort, Löschfrist.
- Echte Kunden- oder Kontaktdaten gehören nie in Code, Logs, Fehlermeldungen, URLs, Analytics-Events, Commit-Messages, Testdaten oder in Prompts an KI-Dienste. Verwende ausschließlich Dummy-Daten.
- Daten nur bei Anbietern speichern, mit denen ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO) besteht. Serverstandort EU/EWR bevorzugen. Bei Übermittlung in Drittländer prüfen und dokumentieren, worauf sie gestützt wird (Angemessenheitsbeschluss, z. B. Data Privacy Framework, oder Standardvertragsklauseln).
- Formulare: nur über HTTPS, Einträge in der Datenbank mit automatischer Löschung nach festgelegter Frist. Die Frist legst du nicht selbst fest, sondern fragst mich.
- Aufbewahrungspflichten (Rechnungen, Buchungsbelege, Geschäftsbriefe) nicht aus dem Gedächtnis angeben, sondern die aktuelle Rechtslage prüfen und die Quelle nennen.
- Newsletter und Werbe-E-Mails nur mit Double-Opt-in und gespeichertem Nachweis (Zeitpunkt, Einwilligungstext, Quelle). Keine Werbe-E-Mails an Adressen ohne dokumentierte Einwilligung, auch nicht an Vereine oder Firmen. Extern beschaffte oder gescrapte Kontaktlisten nicht für Werbung verwenden, ohne die Rechtslage vorher zu klären.
- Vor einer Einwilligung wird nichts geladen, was nicht technisch notwendig ist (§ 25 TDDDG). Schriften lokal einbinden. Karten, Videos, Social-Media-Embeds und reCAPTCHA nur nach Einwilligung oder per Zwei-Klick-Lösung.
- Die Datenschutzerklärung muss zu den tatsächlich eingesetzten Diensten passen. Wenn du einen Dienst hinzufügst oder entfernst, weise mich darauf hin, dass die Erklärung angepasst werden muss.
- Auskunft und Löschung (Art. 15, 17 DSGVO) müssen technisch machbar bleiben. Halte fest, wo welche personenbezogenen Daten liegen.
- Bei Verdacht auf eine Datenpanne sofort melden. Art. 33 DSGVO sieht eine Meldung an die Aufsichtsbehörde binnen 72 Stunden vor.

## Zugangsdaten und Schlüssel

- Passwörter, API-Keys und Tokens nie im Code, nie im Repository, nie in Chat-Ausgaben. Sie gehören in Umgebungsvariablen oder den Secret-Speicher des Hosters. `.env` steht in `.gitignore`.
- Schlüssel mit minimalen Rechten anlegen. Serverseitige Schlüssel (z. B. Service-Role-Keys) niemals im Frontend.
- Findest du ein Secret im Code oder in der Git-Historie: stoppen, melden, Austausch (Rotation) empfehlen. Das Secret dabei nicht vollständig ausgeben.
- Admin-Zugänge nur mit Zwei-Faktor-Authentifizierung, keine geteilten Accounts, kein Benutzername "admin".

## Plugins, Abhängigkeiten, externe Dienste

- Nur gepflegte Plugins und Pakete: Datum des letzten Updates und bekannte Sicherheitslücken prüfen. Keine "nulled" oder inoffiziellen Versionen. Ungenutzte Plugins entfernen, nicht nur deaktivieren.
- Kein neuer Drittanbieter ohne meine Freigabe. Vorher nennen: Name, Zweck, Serverstandort, welche Daten fließen, ob ein AVV verfügbar ist.

## Abschluss jeder Aufgabe

Nenne am Ende jeder Aufgabe in drei Zeilen:
1. Personenbezogene Daten betroffen? Wenn ja, welche und wo.
2. Sicherheitsauswirkung der Änderung.
3. Offene Punkte, die ich entscheiden oder prüfen muss.
