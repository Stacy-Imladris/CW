function grow(x){
  let result = 1;
  x.forEach(function(a){result *= a;});
  return result;
}