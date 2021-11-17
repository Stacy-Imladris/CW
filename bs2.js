function past(h, m, s){
  let result = 0;
  if (h>0){
    result += h * 60 * 60 * 1000;
  }
  if (m>0){
    result += m*60*1000;
  }
  if (s>0){
    result += s*1000;
  }
  return result;
}