function dutyFree(normPrice, discount, hol){
  let result = hol / (normPrice * (discount / 100));
  return Math.floor(result);
}