function high(x){
    let arr = x.split(' ')
    let scores = arr.map(m => [...m].map(el => el.charCodeAt() - 96).reduce((acc, r) => acc + r))
    return arr[scores.findIndex(f => f === Math.max(...scores))]
  }