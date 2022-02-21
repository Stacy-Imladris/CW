const sumArray = (array) => {
  return array ? array.sort((a, b) => a - b)
    .slice(1, -1).reduce((sum, r) => sum += r, 0) : 0
}