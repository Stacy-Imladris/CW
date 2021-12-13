function createPhoneNumber(numbers){
  let a = numbers[0].toString() + numbers[1].toString() + numbers[2].toString();
  let b = numbers[3].toString() + numbers[4].toString() + numbers[5].toString();
  let c = numbers[6].toString() + numbers[7].toString() + numbers[8].toString() + numbers[9].toString();
  return "(" + a + ") " + b + "-" + c;
}