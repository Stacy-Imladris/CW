function takeWhile (arr, pred) {
  let ind = arr.findIndex(f => !pred(f))
  return ind >= 0 ? arr.slice(0, ind) : arr
}