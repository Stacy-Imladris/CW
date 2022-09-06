function noRepeat(str) {
  return Object.entries(([...str].reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {}))).filter(f => f[1] === 1)[0][0]
}