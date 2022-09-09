function thatUnitesUs(array1, array2, n) {
  const arr = [...new Set(array1.concat(array2))].sort((a, b) => a > b ? 1 : -1)
  return arr.slice(0, n)
}