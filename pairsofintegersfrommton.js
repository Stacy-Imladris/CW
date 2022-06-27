function generatePairs(m, n) {
    let res = []
    for (let i = m; i <= n; i++) {
      for (let j = i; j <=n; j++) {
        res.push([i, j])
      }
    }
    return res
  }