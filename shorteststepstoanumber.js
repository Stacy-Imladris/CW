function shortestStepsToNum(num) {
  let n = num
  let count = 0
  while (n > 1) {
    if (n % 2) n -= 1
    else n /= 2
    count++
  }
  return count
}