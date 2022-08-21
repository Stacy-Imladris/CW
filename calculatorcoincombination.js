function coinCombo (cents) {
  const values = [25, 10, 5, 1]
  let res = []
  for (let i = 0; i < values.length; i++) {
    let newValue = Array(Math.floor(cents / values[i])).fill(values[i]).length
    res.push(newValue)
    cents -= newValue * values[i]
  }
	return res.reverse()
}