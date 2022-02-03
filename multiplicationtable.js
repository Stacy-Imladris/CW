multiplicationTable = function(size) {
    return Array(size).fill(0).map((m, i) => Array(size).fill(i + 1).map((a, ind) => a * (ind + 1)))
  }