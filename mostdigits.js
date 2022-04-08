function findLongest(array){
  let number = Math.max(...array.map(m => String(m).length))
  return array.find(f => String(f).length === number)
}