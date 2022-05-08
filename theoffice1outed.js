function outed(meet, boss){
    meet[boss] *= 2
    let arr = Object.values(meet)
    return arr.reduce((acc, r) => acc + r) / arr.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
  }