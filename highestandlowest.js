function highAndLow(numbers){
  let arr = numbers.split(' ');
  let result = [];
  result.push(Math.max.apply(null, arr));
  result.push(Math.min.apply(null, arr));
  return result.join(' ');
}