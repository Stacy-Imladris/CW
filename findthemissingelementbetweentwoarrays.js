function findMissing(arr1, arr2) {
  const sort = arr => arr.sort((a, b) => a - b)
  const a = sort(arr2)
  return sort(arr1).find((f, i) => f !== a[i])
}