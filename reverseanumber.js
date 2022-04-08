function reverseNumber(n) {
    let result = Math.abs(n).toString().split('').reverse().join('')
    return n < 0 ? +result - result * 2 : +result
  }