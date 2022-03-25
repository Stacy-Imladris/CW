function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++){
    let arr = numbers.filter((el, ind) => ind !== i && numbers[i] + el === target)
    if (arr.length > 0){
      return [i, numbers.indexOf(arr[0], i + 1)]
    }
  }
}