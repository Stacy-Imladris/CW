Array.range = function(start, count) {
  return Array(count).fill(0).map((m, i) => start + i)
}

Array.prototype.sum = function() {
  return this.reduce((acc, r) => acc + r, 0)
}