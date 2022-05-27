function minSum(arr) {
    let array = arr.sort((a, b) => a - b)
    let a = array.slice(0, array.length / 2)
    let b = array.slice(array.length / 2).reverse()
    return a.map((m, i) => m * b[i]).reduce((acc, r) => acc + r)
  }