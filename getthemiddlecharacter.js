function getMiddle(s){
  let arr = s.split('');
  if (arr.length === 1){
    return s;
  }
  else if (arr.length % 2 === 1){
    return arr[Math.floor(arr.length / 2)];
  }
  else return arr[arr.length / 2 - 1] + arr[arr.length / 2];
}