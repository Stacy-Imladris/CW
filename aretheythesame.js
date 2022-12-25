function comp(array1, array2){
  if (!array1 || !array2) return false
  let data = array2.map(m => Math.sqrt(m))
  return array1.every(e => {
    if (data.includes(e)) {
      data.splice(data.indexOf(e), 1)
      return true
    }
    return false
  })
}