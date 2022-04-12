function mergeArrays(a, b) {
    let big = a.length > b.length ? a : b
    let result = []
    for (let i = 0; i < big.length; i++) {
      a[i] && result.push(a[i])
      b[i] && result.push(b[i])
    }
    return result
  }