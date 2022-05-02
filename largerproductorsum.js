function sumOrProduct(array, n) {
    let sortedArray = [...array].sort((a, b) => a - b)
    let sum = sortedArray.slice(-n).reduce((acc, r) => acc + r)
    let prod = sortedArray.slice(0, n).reduce((acc, r) => acc * r)
    return sum === prod ? 'same' : prod > sum ? 'product' : 'sum'
  }