function rainAmount(mm){
  let n = 40 - mm;
  if (mm >= 40) {
       return "Your plant has had more than enough water for today!";
  }
  else return "You need to give your plant " + n + "mm of water";
}