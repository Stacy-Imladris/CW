function maxProduct(a) {
  let first = Math.max(...a)
  a.splice(a.indexOf(first), 1)
  let second = Math.max.apply(null, a)
  return first * second
}