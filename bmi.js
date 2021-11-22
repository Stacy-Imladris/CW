function bmi(weight, height) {
  let bmi = weight / (height * height);
  if (bmi > 30){
    return "Obese";
  }
  else if (bmi <= 18.5){
    return "Underweight";
  }
  else if (bmi <= 25){
    return "Normal";
  }
  else return "Overweight";
}