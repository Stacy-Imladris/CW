function getLargerNumbers(a, b) {
    let result = []
    for (let i = 0; i < a.length; i++){
      result.push(a[i] >= b[i] ? a[i] : b[i])
    }
    return result
  }