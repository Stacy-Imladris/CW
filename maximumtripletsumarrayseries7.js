const maxTriSum = (numbers) => {
  let arr = [...new Set(numbers)].sort((a, b) => b - a)
  arr.length = 3
  return arr.reduce((acc, r) => acc + r)
}