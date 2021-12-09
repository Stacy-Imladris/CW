function sumArray(array) {
  let sum = 0;
  if (array == null || array.length === 0 || array == undefined){
    return 0;
  }
  else {
    for (let j = 0; j < array.length; j++){
      if (array[j] === Math.max.apply(null, array)) {
        array.splice(j, 1);
        break;
      }
    }
    for (let a = 0; a < array.length; a++){
      if (array[a] === Math.min.apply(null, array)) {
        array.splice(a, 1);
        break;
      }
    }
    for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
  }
}