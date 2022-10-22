function similarity(a, b) {
  let maxArr = a.length >= b.length ? a : b
  let minArr = a.length < b.length ? a : b
  let similar = maxArr.filter(f => minArr.includes(f)).length 
  return similar ? similar / [...new Set([...a, ...b])].length : 0
}