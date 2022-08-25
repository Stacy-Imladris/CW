function arraySum(arr) {
    let array = arr
    while (array.some(s => Array.isArray(s))) {
      let temp = []
      array.forEach(el => Array.isArray(el) ? temp = [...temp, ...el] : temp = [...temp, el])
      array = temp
    }
    return array.filter(Number).reduce((acc, r) => acc + r, 0)
  }