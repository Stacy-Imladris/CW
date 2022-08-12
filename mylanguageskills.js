const myLanguages = results => Object.entries(results).filter(f => f[1] >= 60)
  .sort((a, b) => b[1] - a[1]).map(m => m[0])