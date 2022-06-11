function digits(num){
    let nums = [...num.toString()].map(Number)
    let res = []
    for (let i = 0; i < nums.length; i++) {
      res = [...res, ...nums.filter((f, ind) => ind > i).map(m => m + nums[i])]
    }
    return res
  }