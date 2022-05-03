function elimination(arr){
  let obj = arr.reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
  let entries = Object.entries(obj)
  let filtered = entries.filter(f => f[1] === 2)
  return filtered.length ? +filtered[0][0] : null
}