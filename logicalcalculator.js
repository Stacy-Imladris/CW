function logicalCalc(array, op){
  let result = array[0];
  for (let i = 1; i < array.length; i++){
    if (op == "AND"){
      result = result && array[i];
    }
    if (op == "OR"){
      result = result || array[i];
    }
    if (op == "XOR"){
      result = result != array[i];
    }
  }
  return result;
}