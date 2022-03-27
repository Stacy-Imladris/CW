String.prototype.camelCase = function(){
  return this.split('').map((m, i, arr) => i === 0 || arr[i - 1] === ' ' ? m.toUpperCase() : m)
    .filter(f => f !== ' ').join('')
}