function duplicates(array){
    let obj = array.reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {})
    let values = Object.values(obj)
    return values.filter(f => f > 1).reduce((acc, r) => acc + Math.floor(r / 2), 0)
  }