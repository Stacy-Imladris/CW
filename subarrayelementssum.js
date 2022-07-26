const elementsSum = (arr, d = 0) => arr
  .reduce((acc, r, i) => acc += (r = r[arr.length - i - 1], r ?? d), 0)