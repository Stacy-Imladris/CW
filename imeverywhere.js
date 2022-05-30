function i(word) {
  let consonant = word.toLowerCase().replace(/[aouei]/gi, '').length
  return consonant <= word.length - consonant || !word || word[0] === word[0].toLowerCase() || 'iI'.includes(word[0]) ? 'Invalid word' : `i${word}`
}