function numberToPower(number, power){
  let result = number;
  if (power > 0){
    for (let i = 2; i <= power; i++){
      result *= number;
    }
  }
  else if (power == 1){
    return number;
  }
  else return 1;
  return result;  
}