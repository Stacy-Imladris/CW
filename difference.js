function findDifference(a, b) {
  let vol1 = a[0] * a[1] * a[2];
  let vol2 = b[0] * b[1] * b[2];
  let dif = vol1 - vol2;
  return Math.abs(dif);
}