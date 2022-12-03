function diff(a, b){
  let res = []
  a.forEach(el => !b.includes(el) && res.push(el))
  b.forEach(el => !a.includes(el) && res.push(el))
  return [...new Set(res.sort((a, b) => a > b ? 1 : -1))]
}