function sortArray(array) {
  let odd = array.filter(f => f % 2 === 1 || f % 2 === -1).sort((a, b) => a - b)
  return array.map(m => m % 2 === 1 || m % 2 === -1 ? odd.shift() : m)
}