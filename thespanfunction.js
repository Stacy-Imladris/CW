function span(arr, predicate) {
  const ind = arr.findIndex(f => !predicate(f))
  return ind >= 0 ? [arr.slice(0, ind), arr.slice(ind)] : [arr, []]
}