function rowSumOddNumbers(n) {
	const getNumbers = (num) => num === 1 ? num : num + getNumbers(num - 1)
  return Array(getNumbers(n) * 2).fill(0)
    .map((m, i) => i + 1).filter(f => f % 2 === 1)
    .slice(-n).reduce((sum, r) => sum + r)
}