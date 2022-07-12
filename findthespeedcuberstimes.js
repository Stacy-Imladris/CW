function cubeTimes(times) {
  let arr = times.sort((a, b) => a - b)
  return [+(arr.slice(1, 4).reduce((acc, r) => acc + r) / 3).toFixed(2), Math.min(...times)]
}