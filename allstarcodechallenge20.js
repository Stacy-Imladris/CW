function addArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) throw 'Error'
  return arr1.map((m, i) => m + arr2[i])
}