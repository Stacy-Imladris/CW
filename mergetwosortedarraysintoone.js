function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2)
    arr.sort((a, b) => a < b ? -1 : 1)
    return arr.filter((f, i) => f !== arr[i - 1])
  }