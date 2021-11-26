function twoOldestAges(ages){
  let first = Math.max.apply(null, ages);
  const index = ages.indexOf(first);
  if (index > -1) {
    ages.splice(index, 1);
  }
  let second = Math.max.apply(null, ages);
  let result = [];
  result.push(second);
  result.push(first);
  return result;
}