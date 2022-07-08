const divisions = (n, divisor) => {
  let count = 0
  while (n >= divisor) {
    count++
    n /= divisor
  }
  return count
}