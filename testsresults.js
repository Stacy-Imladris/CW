function testResult(array) {
  let average = +(array.reduce((acc, r) => acc + r) / array.length).toFixed(3)
  let obj = array.reduce((obj, r) => {
    if (r >= 9) {
      obj['h'] += 1
    } else if (r >= 7) {
      obj['a'] += 1
    } else {
      obj['l'] += 1
    }
    return obj
  }, {'h': 0, 'a': 0, 'l': 0})
  return obj['a'] === 0 && obj['l'] === 0 ? [average, obj, 'They did well'] : [average, obj]
}