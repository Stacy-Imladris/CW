function procedure(n){
  let arr = Array(Math.floor(100 / n)).fill(n).map((m, i) => m * (i + 1))
  return arr.map(m => [...m.toString()].reduce((acc, r) => +r + acc, 0)).reduce((acc, r) => acc + r)
}