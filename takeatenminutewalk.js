function isValidWalk(walk) {
  let obj = walk.reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
  return walk.length === 10 && obj['n'] === obj['s'] && obj['e'] === obj['w']
}