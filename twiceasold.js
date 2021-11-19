function twiceAsOld(dadYearsOld, sonYearsOld) {
  n = dadYearsOld - (sonYearsOld * 2);
  if (n > 0) {
    return n;
  }
  else return Math.abs(n);
}