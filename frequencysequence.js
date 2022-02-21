const freqSeq = (str, sep) => {
    let arr = str.split('')
    let obj = arr.reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {})
    return arr.map(m => obj[m]).join(sep)
  }
  