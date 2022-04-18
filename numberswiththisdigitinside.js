function numbersWithDigitInside(x, d) {
  let arr = Array(x).fill(0).map((m, i) => i + 1).filter(f => f.toString().includes(d.toString()))
  const length = arr.length
  const sum = arr.length ? arr.reduce((acc, r) => acc + r) : 0
  const product = arr.length ? arr.reduce((acc, r) => acc * r) : 0
  return [length, sum, product]
}