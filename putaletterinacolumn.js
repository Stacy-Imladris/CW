function buildRowText(index, character) {
  return `|${Array(9).fill(' ').map((m, i) => i === index ? character : m).join('|')}|`
}