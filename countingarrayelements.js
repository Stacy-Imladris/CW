function count(array){
  return array.reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
}