function duplicateCount(text){
  let obj = text.toLowerCase().split('').reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
  let values = Object.values(obj).filter(f => f > 1)
  return values.length 
}