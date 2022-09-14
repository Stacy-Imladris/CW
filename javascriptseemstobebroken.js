function semicolonSeparationToCommaSeparation(input) {
  let [one, two, three] = input.split(';')
  return `${one},${two},${three}`
}