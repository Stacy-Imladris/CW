function solve(arr){
  let obj = arr.reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
  let entries = Object.entries(obj).sort((a, b) => b[1] > a[1] ? 1 : b[1] < a[1] ? -1 : a[0] - b[0])
  let array = entries.map(m => Array(m[1]).fill(m[0]).map(Number))
  let result = []
  array.forEach(el => result = [...result, ...el])
  return result
}