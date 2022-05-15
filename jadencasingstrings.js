String.prototype.toJadenCase = function () {
  return this.split(' ').map(m => m[0].toUpperCase() + m.slice(1).toLowerCase()).join(' ')
}