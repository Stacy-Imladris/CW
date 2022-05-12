function roundToNext5(n){
  let result = n
  while (result % 5 !== 0) {
    result += 1
  }
  return result
}