function findChildren(dancingBrigade) {
    let obj = [...dancingBrigade].reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {})
    let keys = Object.keys(obj).filter(f => f.toUpperCase() === f).sort()
      return keys.reduce((str, r) => {
      str += r + r.toLowerCase().repeat(obj[r.toLowerCase()])
      return str
    }, '')
  }