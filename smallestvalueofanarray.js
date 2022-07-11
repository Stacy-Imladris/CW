function min(arr, toReturn) {
  const min = Math.min(...arr)
  return toReturn === 'value' ? min : arr.indexOf(min)
}