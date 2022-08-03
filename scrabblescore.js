const scrabbleScore = str => [...str.replace(/ /g, '')]
  .map(m => $dict[m.toUpperCase()]).reduce((acc, r) => acc + r, 0)