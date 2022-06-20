const cutCube = (volume, n) => {
    const isNum = n => Number.isInteger(Math.cbrt(n))
    return isNum(n) && isNum(volume / n) 
  }