function evenLast(n) {
    return n.length > 0 ?
      n.reduce((sum, r, i) => i % 2 === 0 ? sum += r : sum, 0) * n[n.length - 1] : 0
  }