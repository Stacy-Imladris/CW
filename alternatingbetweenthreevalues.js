function f(x, cc) {
  let arr = Object.values(cc)
  let ind = arr.findIndex(f => f === x)
  return arr[ind + 1] || arr[0]
}