function countPositivesSumNegatives(input) {
  let result = [];
  let count = 0;
  let sum = 0;
  if (input == null || input.length === 0){
    return result;
  }
  if (input.length > 0){
    for (let i = 0; i < input.length; i++){
    if (input[i] > 0){
      count += 1;
    }
    else sum += input[i];
  }
  result.push(count, sum);
  return result;
  }
}