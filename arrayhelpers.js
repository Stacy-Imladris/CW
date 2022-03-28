Array.prototype.square = function(){
  return this.map(m => m ** 2)
}
Array.prototype.cube = function(){
  return this.map(m => m ** 3)
}
Array.prototype.sum = function(){
  return this.reduce((sum, r) => sum + r)
}
Array.prototype.average = function(){
  return this.length > 0 ? this.reduce((sum, r) => sum + r) / this.length : NaN
}
Array.prototype.even = function(){
  return this.filter(f => f % 2 === 0)
}
Array.prototype.odd = function(){
  return this.filter(f => f % 2 === 1)
}