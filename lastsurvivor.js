function lastSurvivor(letters, coords) {
  for (let i = 0; i < coords.length; i++){
    let a = coords[i];
    letters = letters.substring(0, a) + letters.substring((a + 1), letters.length);
  }
  return letters;
}