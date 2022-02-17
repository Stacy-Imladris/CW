function SeriesSum(n){
    let arr = []
    let d = 4
    if (n >= 1) arr.push(1)
    if (n >= 2) arr.push(1 / d)
    if (n >= 3){
      for(let i = 3; i <= n; i++){
        arr.push(1 / (d + 3))
        d += 3
      }
    }
    return arr.reduce((sum, r) => sum += r, 0).toFixed(2)
  }