function compoundArray(a, b) {
  let res = []
  a.forEach((el, i) => {
    res.push(el)
    if (b[i] !== undefined) res.push(b[i])
  })
  return res.concat(b.slice(a.length))
}