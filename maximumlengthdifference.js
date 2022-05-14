function mxdiflg(a1, a2) {
  const getMix = (arr, prop = true) => prop ? Math.max(...arr.map(m => m.length)) : Math.min(...arr.map(m => m.length))
  return !a1.length || !a2.length ? -1 
  : Math.max(...[Math.abs(getMix(a1) - getMix(a2, false)), Math.abs(getMix(a1, false) - getMix(a2))])
}