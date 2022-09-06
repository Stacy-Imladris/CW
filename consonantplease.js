function sortLetters(arr) {
  let res = []
  arr.forEach(el => res = res.concat(el))
  return res.reduce((acc, r) => {
    if (/[aeiou]/i.test(r)) acc[0].push(r.toUpperCase())
    if (/[^aeiou\d]/i.test(r)) acc[1].push(r.toUpperCase())
    return acc
  }, [[], []])
}