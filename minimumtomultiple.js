function minimum(a, x) {
  let count = 0
  while ((a + count) % x && (a - count) % x) {
    count++
  }
  return count
}