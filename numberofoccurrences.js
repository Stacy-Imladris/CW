Array.prototype.numberOfOccurrences = function(n) {
  return this.reduce((res, r) => r === n ? res + 1 : res, 0)
}