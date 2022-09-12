function countGrade(scores){
  let obj = {S: 0, A: 0, B: 0, C: 0, D: 0, X: 0}
  scores.forEach(el => {
    if (el === 100) obj.S += 1
    if (el >= 90 && el < 100) obj.A += 1
    if (el >= 80 && el < 90) obj.B += 1
    if (el >= 60 && el < 80) obj.C += 1
    if (el >= 0 && el < 60) obj.D += 1
    if (el === -1) obj.X += 1
  })
  return obj
}