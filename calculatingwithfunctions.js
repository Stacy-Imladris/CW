['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  .forEach((f, i) => this[f] = (func = num => num) => func(i))

const plus = b => a => Math.floor(a + b)
const minus = b => a => Math.floor(a - b)
const times = b => a => Math.floor(a * b)
const dividedBy = b => a => Math.floor(a / b)