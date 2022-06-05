function invertHash(hash) {
    let arr = Object.entries(hash).map(m => [m[0], m[1]] = [m[1], m[0]])
    let obj = {}
    arr.forEach(el => obj[el[0]] = el[1])
    return obj
  }