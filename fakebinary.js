function fakeBin(x){
  let arr = x.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 5){
      result.push(0);
    }
    else result.push(1);
  }
  return result.join('');
}