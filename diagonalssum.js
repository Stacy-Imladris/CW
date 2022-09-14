function sum(matrix) {
    const sum = arr => arr.reduce((acc, r) => acc + r, 0)
    return sum(matrix.map((m, i) => m[i])) + sum(matrix.map((m, i, arr) => m[arr.length - i - 1]))
  }