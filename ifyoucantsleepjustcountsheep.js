let countSheep = function (num){
  let result = "";
  if (num === 0){
    return result;
  }
  else {
    for (let i = 1; i <= num; i++){
      let a = i;
      result += a + " sheep...";
    }
    return result;
  }
}