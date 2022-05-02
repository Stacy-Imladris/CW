function numberJoy(n) {
  let arr = [...n.toString()].map(Number)
  let sum = arr.reduce((acc, r) => acc + r)
  return +[...sum.toString()].reverse().join('') * sum === n
}