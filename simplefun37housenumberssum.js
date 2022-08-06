function houseNumbersSum(inputArray) {
    let arr = inputArray.slice(0, inputArray.findIndex(f => f === 0))
    return arr.length ? arr.reduce((acc, r) => acc + r) : 0
  }