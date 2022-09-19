function missingValues(arr) {
    let entries = Object.entries(arr.reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {}))
    let one = entries.find(f => f[1] === 1)[0]
    let two = entries.find(f => f[1] === 2)[0]
    return one * one * two
  }