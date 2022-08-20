function findOddDigits(n, k) {
    let odds = ['0', '2', '4', '6', '8']
    let digits = [...n.toString()].filter(f => !odds.includes(f))
    return digits.length >= k ? +digits.slice(0, k).join('') : 0
  }