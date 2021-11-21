function century(year) {
  let result = Math.floor(year / 100);
  if (year % 100 != 0){
    result = Math.floor(year / 100) + 1;
    return result;
  }
  else return result;
}