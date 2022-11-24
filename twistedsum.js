const twistedSum = n => Array(n).fill(0).map((m, i) => i + 1)
  .join('').split('').reduce((acc, r) => +r + acc, 0)