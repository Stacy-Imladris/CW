function sumDigPow(a, b) {
  let arr = Array(b - a + 1).fill(0).map((m, i) => a + i)
  return arr.filter(f => f === [...f.toString()].map(Number).reduce((acc, r, i) => acc + r ** (i + 1), 0))
}