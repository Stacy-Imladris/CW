function well(x){
  const obj = x.flat().map(m => typeof m === 'string' && m.toLowerCase()).reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
  return obj['good'] > 2 ? 'I smell a series!' : obj['good'] > 0 ? 'Publish!' : 'Fail!'
}