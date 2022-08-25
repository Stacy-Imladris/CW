function explode(x){
  let res = x.filter(Number).reduce((acc, r) => r + acc, 0)
  return x.some(s => typeof s === 'number') ? Array(res).fill(x) : 'Void!'
}