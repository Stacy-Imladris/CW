function findShort(s){
  let arr = s.split(' ');
  let result = arr[0].length;
  for (let i = 1; i < arr.length; i++){
    if (arr[i].length < result){
      result = arr[i].length;
    }
  }
  return result;
}