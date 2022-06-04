function maxMin(arr1,arr2){
  let arr = arr1.map((m, i) => Math.abs(m - arr2[i]))
  return [Math.max(...arr), Math.min(...arr)]
}