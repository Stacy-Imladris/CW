function battle(x, y) {
    let func = (str) => str.toLowerCase().split('').reduce((sum, r) => sum + (r.charCodeAt() - 97), 0)
    return func(x) === func(y) ? 'Tie!' : func(x) > func(y) ? x : y
  }