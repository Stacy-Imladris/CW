const maxDiff = list => {
  let arr = list.sort((a, b) => a - b)
  return list.length <= 1 ? 0 : arr[arr.length - 1] - arr[0]
}