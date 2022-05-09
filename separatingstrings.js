function sepStr(str) {
  let arr = str.split(' ')
  let max = arr.reduce((max, r) => max > r.length ? max : r.length, arr[0].length)
  return Array(max).fill(0).map((m, i) => arr.reduce((array, r, ind) => {
    if (arr[ind][i]) {
      array.push(arr[ind][i])
    } else {
      array.push('')
    }
    return array
  }, []))
}