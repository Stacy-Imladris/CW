function heavyMetalUmlauts(boringText) {
  let obj = {A: 'Ä', E: 'Ë', I: 'Ï', O: 'Ö', U: 'Ü', Y: 'Ÿ', a: 'ä', e: 'ë', i: 'ï', o: 'ö', u: 'ü', y: 'ÿ'}
  return [...boringText].map(m => obj[m] ? obj[m] : m).join('')
}