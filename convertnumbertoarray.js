function digitize(n) {
  let arr = [];
  let zero = [0];
  if (n === 0) {
    return zero;
  }
  else {
    while (n > 0) {
    arr.push(n % 10);
    n = Math.floor (n / 10);
  }
  return arr;
  }
}