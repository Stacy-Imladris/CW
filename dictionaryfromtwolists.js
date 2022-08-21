function createDict(keys, values){
    let obj = {}
    keys.forEach((el, i) => obj[el] = values[i] !== undefined ? values[i] : null)
    return obj
  }