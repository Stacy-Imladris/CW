const pyramid = (balls) => {
    let result = 0;
    for (let i = 1; i <= balls; i++) {
      result += 1
      balls -= i
    }
    return result
  }