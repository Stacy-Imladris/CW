function paul(x){
  const values = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
  const misery = x.reduce((sum, r) => sum + values[r], 0)
  return misery < 40 ? 'Super happy!' : misery < 70 ? 'Happy!' : misery < 100 ? 'Sad!' : 'Miserable!'
}