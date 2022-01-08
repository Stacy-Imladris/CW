let moveZeros = function (arr) {
    let a = arr.filter(i => i !== 0)
    let b = arr.length - a.length
    for (let i = 0; i < b; i++) {
      a.push(0)
    }
    return a
  }