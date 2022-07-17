function multiplyAndFilter(array, multiplier){
  return array.filter(f => typeof f === 'number').map(m => m * multiplier)
}