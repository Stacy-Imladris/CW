function multiply(number){
  let a = Math.abs(number).toString();
  return number * Math.pow(5, a.length);
}