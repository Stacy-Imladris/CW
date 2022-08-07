function twoDecimalPlaces(number) {
  let arr = [...number.toString()]
  return +arr.slice(0, arr.indexOf('.') + 3).join('')
}