Array.prototype.only = function(keys){
  return this.filter((f, i) => keys.includes(i))
}