function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return ''
  let arr = Array(strarr.length - k + 1).fill(1).map((m, i) => strarr.slice(i, i + k).join(''))
  return arr.find(f => f.length === Math.max(...arr.map(m => m.length)))
}