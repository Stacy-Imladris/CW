const halvingSum = (n) => {
  let sum = n
  while (n > 0) {
    n = Math.floor(n / 2)
    sum += n
  }
  return sum
}