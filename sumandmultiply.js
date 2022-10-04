let sumAndMultiply = function(sum, multiply) {
  let res = 0
  while(res < sum) {
    let one = res
    let two = sum - res
    if (one * two === multiply) return [one, two]
    res++
  }
  return null
}