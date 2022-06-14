function createArrayOfTiers(num) {
    let str = num.toString()
    return Array(str.length).fill(0).map((m, i) => str.substring(0, i + 1))
  }