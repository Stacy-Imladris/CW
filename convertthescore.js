function scoreboard(string) {
  const obj = {nil: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9}
  return string.split(' ').map(m => typeof obj[m] === 'number' ? obj[m] : m).filter(f => typeof f !== 'string')
}