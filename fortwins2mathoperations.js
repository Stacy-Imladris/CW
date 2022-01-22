function iceBrickVolume(radius, bottleLength, rimLength) {
  let side = Math.sqrt(radius * radius * 2)
  return Math.round((bottleLength - rimLength) * side * side)
}