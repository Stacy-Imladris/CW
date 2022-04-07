function lostSheep(friday,saturday,total){
  let frid = friday.length > 0 ? friday.reduce((sum, r) => sum + r) : 0
  let sat = saturday.length > 0 ? saturday.reduce((sum, r) => sum + r) : 0
  return total - frid - sat
}