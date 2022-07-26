function repeats(arr){
  let obj = arr.reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
  return Object.entries(obj).filter(f => f[1] === 1).map(m => +m[0]).reduce((acc, r) => acc + r)
}