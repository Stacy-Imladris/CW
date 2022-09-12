function min(a, b){
  if (isNaN(+a) || isNaN(+b)) return NaN
  return (a < b) ? +a : +b
}