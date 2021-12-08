function invert(array) {
  let result = [];
  if (array.length === 0) {
    return array;
  }
  else {
    for (let i = 0; i < array.length; i++){
     if (array[i] < 0){
        result.push(Math.abs(array[i]));
      }
      else result.push(-Math.abs(array[i]));
    }
  }
  return result;
}