function firstNonRepeated(s) {
    let entries = Object.entries([...s].reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {}))
    let unique = entries.find(f => f[1] === 1)
    return unique ? unique[0] : null
  }