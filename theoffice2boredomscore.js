function boredom(staff){
  let boredomObj = {accounts: 1, finance: 2, canteen: 10, regulation: 3, trading: 6,
    change: 6, IS: 8, retail: 5, cleaning: 4, 'pissing about': 25,}
  let score = Object.values(staff).map(m => boredomObj[m]).reduce((acc, r) => acc + r)
  return score <= 80 ? 'kill me now' : score >= 100 ? 'party time!!' : 'i can handle this'
}