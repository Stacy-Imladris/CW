let countBits = function(n) {
    return n.toString(2).split('').reduce((acc, r) => +r + acc, 0)
  }