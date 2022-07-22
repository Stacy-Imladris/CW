function singleDigit(n) {
    const getBin = num => [...num.toString(2)].reduce((acc, r) => +r + acc, 0)
    let res = n
    while (res > 9) { res = getBin(res) }
    return res
  }