function validateWord(s){
  let obj = s.toLowerCase().split('').reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
  let values = Object.values(obj)
  return values.every(e => e === values[0])
}