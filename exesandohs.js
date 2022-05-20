function XO(str) {
  let obj = [...str.toLowerCase()].reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
  return obj['x'] === obj['o']
}