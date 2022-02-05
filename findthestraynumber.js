function stray(numbers) {
    const obj = numbers.reduce((obj, r) => {
      obj[r] = (obj[r] || 0) + 1
      return obj
    }, {})
    let values = Object.values(obj)
    let keys = Object.keys(obj)
    return +keys[values.indexOf(1)]
  }