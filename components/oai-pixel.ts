/*
  Kennung des Mess-Pixels von OpenAI (Anzeigen in ChatGPT).

  Steht hier einmal, weil zwei Stellen sie brauchen: das Cookie-Fenster, das
  das Pixel im Browser laedt (CookieConsent.tsx), und die Server-Funktion,
  die dieselbe Meldung ueber die Conversions API schickt
  (app/api/conversion/route.ts). Beide muessen dieselbe Kennung nennen, sonst
  erkennt OpenAI die doppelte Meldung nicht als ein und dieselbe.

  Die Pixel-ID ist kein Geheimnis: Sie steht bei jedem Besucher, der
  zugestimmt hat, im ausgelieferten Seitencode. Mit ihr kann niemand das
  Werbekonto oeffnen oder Daten lesen. Geheim ist allein der
  Conversions-API-Schluessel — der liegt nur bei Vercel als
  Umgebungsvariable OPENAI_CONVERSIONS_API_KEY und nie im Code.
*/
export const OAI_PIXEL_ID = 'D5KgcrttzWw1KsiGc1khM6'
