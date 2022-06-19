function startingMark(bodyHeight){
  const [a, b] = [10.67, 1.83]
  const term = (a - 9.45) / (b - 1.52)
  return Math.round((bodyHeight * term + a - term * b) * 100) / 100
}