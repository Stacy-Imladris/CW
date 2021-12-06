function sumOfDifferences(arr) {
  if (arr.length <= 1){
    return 0;
  }
  else {
    function compareNumbers(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    }
    arr.sort(compareNumbers);
    let sum = 0;
    for (let i = 1; i < arr.length; i++){
      sum += arr[i] - arr[i - 1];
    }
    return sum;
  }
}