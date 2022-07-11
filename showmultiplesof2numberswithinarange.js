function multiples(s1,s2,s3){
    let min = Math.min(...[s1, s2])
    let arr = Array(s3 - min).fill(0).map((m, i) => i + min)
    return arr.filter(f => !(f % s1) && !(f % s2))
  }