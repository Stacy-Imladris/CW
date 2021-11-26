var repeatIt = function(str, n) {
  let a = typeof str;
  if (a == "string"){
    return str.repeat(n);
  }
  else return "Not a string";
}