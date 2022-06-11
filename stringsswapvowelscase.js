function swapVowelCase(str) {
  return [...str].map(m => {
    if ('aeouiAEOUI'.includes(m)) {
      return m.toLowerCase() === m ? m.toUpperCase() : m.toLowerCase()
    } else return m
  }).join('')
}