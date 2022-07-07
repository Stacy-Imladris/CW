function getNumberOfSquares(n) {
    let res = 0
    let sum = 0
    Array(n).fill(0).map((m, i) => (i + 1) ** 2).some(s => {
      sum += s
      if (sum < n) {
        res += 1
        return false
      } else return true 
    })
    return res
  }