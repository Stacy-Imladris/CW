function isTriangular(t) {
  const a = (Math.sqrt(8 * t + 1) - 1) / 2;
  if (Number.isInteger(a)){
     return true;
  }
  else return false;
}