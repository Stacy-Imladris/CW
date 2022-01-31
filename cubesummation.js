function cubeSum(n, m){
    let min = Math.min(n, m)
    let max = Math.max(n, m)
    let sum = 0
    if (n === m){
      return 0
    } else {
      for (let i = min + 1; i <= max; i++){
        sum += Math.pow(i, 3)
      }
      return sum
    }
  }