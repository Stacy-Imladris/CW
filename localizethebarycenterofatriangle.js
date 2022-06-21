function barTriang(p1, p2, p3){
  let arr = [...arguments]
  const getRes = (a, i) => +(a.reduce((acc, r) => acc + r[i], 0) / 3).toFixed(4)
  return [getRes(arr, 0), getRes(arr, 1)]
}