function compress(sentence) {
    let arr = sentence.toLowerCase().split(' ')
    let n = 0
    let obj = arr.reduce((obj, r, i) => {
      if (!obj.hasOwnProperty(r)) {
        obj[r] = n
        n++
      }
      return obj
    }, {})
    return arr.map(m => obj[m]).join('')
  }