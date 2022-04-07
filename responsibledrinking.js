function hydrate(s) {
    let glasses = +s.split('').filter(f => !isNaN(+f) && f !== ' ').reduce((sum, r) => +r + sum, 0)
    return glasses === 1 ? `1 glass of water` : `${glasses} glasses of water`
  }