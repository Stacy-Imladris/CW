function animals(heads, legs){
    let cows = (legs - heads * 2) / 2
    let chickens = (legs - cows * 4) / 2
    return [chickens, cows].every(e => Number.isInteger(e) && e >= 0) ? [chickens, cows] : 'No solutions'
  }