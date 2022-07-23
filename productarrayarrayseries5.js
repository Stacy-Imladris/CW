const productArray = numbers => numbers
  .map((m, i) => numbers.reduce((acc, r, j) => i !== j ? acc * r : acc, 1))