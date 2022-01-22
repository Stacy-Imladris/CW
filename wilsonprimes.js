function amIWilson(p) {
    let factorial = 1
    for (let i = 1; i <= p - 1; i++){
      factorial *= i
    }
    return Number.isInteger((factorial + 1) / (p * p))
  }