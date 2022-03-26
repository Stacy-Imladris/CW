function digital_root(n) {
  let sum = n.toString().split('').reduce((sum, r) => +r + sum, 0)
  return sum > 9 ? digital_root(sum) : sum
}