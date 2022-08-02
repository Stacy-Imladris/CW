function isPrime(n) {
  if (n !== 2 && (!(n % 2) || n < 2)) return false
  return Array(n + 1).fill(0).map((m, i) => i + 1).every(e => [0, 1, n].includes(e) || n % e)
}