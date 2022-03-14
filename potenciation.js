function power(x,y){
    if (Math.abs(x) === 1 || x === 0 && y === 0 || y === 0) return 1
    if (x === 0) return 0
    if (y === 1) return x
    return x * power(x, y - 1)
  }