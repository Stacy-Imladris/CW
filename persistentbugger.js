const persistence = (num) => {
  let arr = num.toString().split('')
  let count = 0
  while (num > 9) {
    num = num.toString().split('').reduce((acc, r) => acc * r)
    count++
  }
  return count
}