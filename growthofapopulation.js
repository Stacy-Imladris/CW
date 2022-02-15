const nbYear = (p0, percent, aug, p) => {
    let n = 0
    for (let i = 1; p0 < p; i++){
      p0 = p0 + p0 * percent / 100 + aug
      n += 1
    }
    return n
  }