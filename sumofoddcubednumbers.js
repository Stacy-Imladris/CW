function cubeOdd(arr) {
  if (!arr.every(e => typeof e === 'number')) return
  return arr.map(m => m ** 3).filter(f => f % 2).reduce((acc, r) => acc + r)
}