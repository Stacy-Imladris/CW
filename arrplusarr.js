function arrayPlusArray(arr1, arr2) {
  let arr3 = [];
  let result = 0;
  for (i=0; i < arr1.length; i++) {
    arr3.push(arr1[i]+arr2[i]);
  }
  for (i=0; i < arr3.length; i++){
    result += arr3[i];
  }
  return result;
}