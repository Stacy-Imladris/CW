let humanYearsCatYearsDogYears = function(humanYears) {
  let result = [];
  let cat = 0;
  let dog = 0;
  result.push(humanYears);
  if (humanYears === 1){
    cat = 15;
    dog = 15;
  }
  else if (humanYears === 2){
    cat = 15 + 9;
    dog = 15 + 9;
  }
  else {
    cat = 15 + 9 + (humanYears - 2) * 4;
    dog = 15 + 9 + (humanYears - 2) * 5;
  }
  result.push(cat, dog);
  return result;
}