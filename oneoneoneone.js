function consecutiveOnes(nums) {
    let num = 0
    let res = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        num += 1
        if (num > res) {
          res = num
        }
      } else {
        num = 0
      }
    }
    return res
  }