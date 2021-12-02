function differenceInAges(ages){
  let youngest = Math.min.apply(null, ages);
  let oldest = Math.max.apply(null, ages);
  let difference = oldest - youngest;
  let result = [];
  result.push(youngest);
  result.push(oldest);
  result.push(difference);
  return result;
}