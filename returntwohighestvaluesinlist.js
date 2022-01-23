function twoHighest(arr) {
    arr.sort((a, b) => a > b ? 1 : -1)
    let result = arr.filter((f, i) => f !== arr[i - 1])
    return result.length > 1 ? [result[result.length - 1], result[result.length - 2]] : result
  }