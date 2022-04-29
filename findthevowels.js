function vowelIndices(word){
  return word.split('').map((m, i) => 'aeiouyAEIOUY'.includes(m) ? i + 1 : '-').filter(Number)
}