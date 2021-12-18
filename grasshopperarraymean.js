var findAverage = function (nums) {
  let sum = 0;
  if (nums.length === 1){
    return nums[0];
  }
  else {
    for (let i = 0; i < nums.length; i++){
      sum += nums[i];
    }
    return sum / nums.length;
  }
}