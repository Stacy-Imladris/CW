function arrayMadness(a, b) {
  let squares = 0;
  let cubes = 0;
  for (let i = 0; i < a.length; i++){
    squares += Math.pow(a[i], 2);
  }
  for (let j = 0; j < b.length; j++){
    cubes += Math.pow(b[j], 3);
  }
  return squares > cubes;
}