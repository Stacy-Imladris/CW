let reg = /"(\\.|[^"\\])*"/g
function getQuotes(string) {
  return string.match(reg)
}