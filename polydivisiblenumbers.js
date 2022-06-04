function polydivisible(x) {
    let nums = [...x.toString()]
    let arr = []
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums.slice(0, i + 1))
    }
    return arr.map(m => +m.join('')).every((e, i) => !(e % (i + 1)))
  }