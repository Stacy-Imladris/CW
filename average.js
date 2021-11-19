function find_average(array) {
  let sum = 0;
  if (array.length > 0){
  for (i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum / array. length;
  }
  else return 0;
}