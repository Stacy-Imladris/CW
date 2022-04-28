function isNarcissistic(n){
    let arr = n.toString().split('')
    return n === arr.map(m => Math.pow(+m, arr.length)).reduce((acc, r) => acc + r)
  }