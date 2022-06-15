function firstNonConsecutive (arr) {
  let num = arr.filter((f, i) => i !== 0 && f - arr[i - 1] !== 1)[0]
  return num !== undefined ? num : null
}