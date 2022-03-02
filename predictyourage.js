function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  return Math.floor(Math.sqrt([...arguments].map(m => m * m).reduce((sum, r) => sum + r)) / 2)
}