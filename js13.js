function whatNumberIsIt(n){
  //coding here
  let a = new Number(n);
  if (Number.MAX_VALUE == a){
    return "Input number is Number.MAX_VALUE";
  }
  else if (Number.MIN_VALUE == a){
    return "Input number is Number.MIN_VALUE";
  }
  else if (isNaN(a)){
    return "Input number is Number.NaN";
  }
  else if (Number.NEGATIVE_INFINITY ==a){
    return "Input number is Number.NEGATIVE_INFINITY";
  }
  else if (Number.POSITIVE_INFINITY ==a){
    return "Input number is Number.POSITIVE_INFINITY";
  }
  else return "Input number is " + Number(n);
}