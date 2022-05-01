function product (string) {
  let obj = [...string].reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
  return string && obj['!'] && obj['?'] ? obj['!'] * obj['?'] : 0
}