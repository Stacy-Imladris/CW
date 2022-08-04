function nearestSq(n){
    const check = n => Number.isInteger(Math.sqrt(n))
    if (n === 1) return 1
    let count = 0
    while (!check(n)) {
      if (check(n + count)) return n + count
      if (check(n - count)) return n - count
      count++
    }
  }