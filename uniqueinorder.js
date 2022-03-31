let uniqueInOrder = function(iterable){
  let arr = typeof iterable === 'string' ? iterable.split('') : iterable
  return arr.filter((f, i) => f !== iterable[i - 1])
}