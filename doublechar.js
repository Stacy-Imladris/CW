function doubleChar(str) {
  let arr = str.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(arr[i].repeat(2));
  }
  return result.join('');
}
