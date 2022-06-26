let isMonotone = function(arr){
  return arr.every((e, i) => i === arr.length - 1 || arr[i + 1] >= e)
}