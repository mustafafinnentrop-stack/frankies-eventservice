import './entwuerfe.css'

/*
  Gemeinsame Huelle der drei Startseiten-Entwuerfe. Laedt nur das
  Entwurfs-Stylesheet — Navigation und Footer baut jeder Entwurf selbst,
  weil beides Teil der jeweiligen Formsprache ist.
*/
export default function EntwurfSeiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
