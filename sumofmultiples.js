function sumMul(n,m){
    let sum = 0
    for (let i = n; i < m; i += n) {
      sum += i
    }
    return sum === 0 ? 'INVALID' : sum
  }