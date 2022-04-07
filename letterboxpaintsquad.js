let paintLetterboxes = function(start, end) {
  let str = Array(end - start + 1).fill(0).map((m, i) => (i + start).toString()).join('')
  let obj = str.split('').reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0})
  return Object.values(obj)
}
