function solution(nums){
    let a = [];
    if (nums === null){
      return a;
    }
    else {
      function compareNumbers(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    }
    nums.sort(compareNumbers);
    return nums;
    }
  }