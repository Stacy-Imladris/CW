const flip = (d, a) => {
  const compareNumbers = (a, b) => a > b ? 1 : a < b ? -1 : 0;
  return d === 'R' ? a.sort(compareNumbers) : a.sort(compareNumbers).reverse()
  }