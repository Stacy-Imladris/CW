function rangeBitCount(a, b) { 
  const getSum = (arr) => arr.reduce((acc, r) => +r + acc, 0)
  return getSum(Array(b - a + 1).fill(0).map((m, i) => getSum([...(i + a).toString(2)])))
}