function derDieDas(wort){
  const vowelsCount = [...wort].filter(f => /[aeiouäöü]/i.test(f)).length
  return `${vowelsCount < 2 ? 'das' : vowelsCount > 3 ? 'der' : 'die'} ${wort}`
}