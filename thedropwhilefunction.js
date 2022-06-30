function dropWhile(arr, pred) {
  let ind = arr.findIndex(f => !pred(f))
  return ind >= 0 ? arr.slice(ind) : []
}