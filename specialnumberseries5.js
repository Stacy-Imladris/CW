function specialNumber(n){
    let arr = [0, 1, 2, 3, 4, 5]
    return n === +n.toString().split('').filter(f => arr.includes(+f)).join('') ? 'Special!!' : 'NOT!!'
  }