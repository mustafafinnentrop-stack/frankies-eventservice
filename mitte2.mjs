import { chromium } from 'playwright'
const SEITEN = ['/', '/service', '/cocktailbar-lennestadt', '/getraenkeservice-schuetzenfest',
  '/hochzeit-sauerland', '/eventservice-kreis-olpe', '/partner', '/gibtsnicht']
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await b.newPage({ viewport: { width: 390, height: 844 } })
for (const s of SEITEN) {
  await p.goto('http://localhost:3119' + s, { waitUntil: 'networkidle' })
  await p.evaluate(() => { document.querySelectorAll('.reveal').forEach(e => e.classList.add('visible')) })
  const rows = await p.evaluate(() => {
    const aus = []
    document.querySelectorAll('.section-title, .section-label').forEach((el) => {
      const r = el.getBoundingClientRect()
      const pr = el.parentElement.getBoundingClientRect()
      const abweichung = Math.round((r.left + r.width / 2) - (pr.left + pr.width / 2))
      if (Math.abs(abweichung) > 8) aus.push({
        cls: el.className.split(' ')[0],
        text: el.textContent.trim().slice(0, 40),
        abweichung,
      })
    })
    return aus
  })
  console.log(`${s}: ${rows.length} außermittig`)
  for (const r of rows) console.log(`   ${r.abweichung}px  <${r.cls}> "${r.text}"`)
}
await b.close()
