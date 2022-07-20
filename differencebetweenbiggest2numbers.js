function diffBig2(arr) {
    let one = Math.max(...arr)
    arr.splice(arr.indexOf(one), 1)
    let two = Math.max(...arr)
    return Math.abs(one - two)
  }