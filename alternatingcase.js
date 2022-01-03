String.prototype.toAlternatingCase = function () {
  let arr = this.split('')
  return arr.map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
}