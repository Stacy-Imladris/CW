function oddOnesOut(nums) {
    const obj = nums.reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {})
    let values = Object.entries(obj).filter(f => f[1] % 2 === 0).map(m => +m[0])
    return nums.filter(f => values.includes(f))
  }