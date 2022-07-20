function averages(numbers) {
  if (!numbers || numbers.length <= 1) return []
  return numbers.map((m, i) => (numbers[i - 1] + m) / 2).slice(1)
}