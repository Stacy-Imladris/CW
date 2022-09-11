let lengthOfSequence = function (arr, n) {
  return arr.filter(f => f === n).length === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0
}