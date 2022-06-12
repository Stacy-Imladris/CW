function majority(arr) {
  if (!arr.length) return null
  let obj = arr.reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
  let sort = Object.entries(obj).sort((a, b) => b[1] - a[1])
  if (sort.length === 1) return sort[0][0]
  return sort[0][1] !== sort[1][1] ? sort[0][0] : null
}