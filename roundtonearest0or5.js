function roundToFive(numbers){
  return numbers.map(m => {
    let rest = m % 5
    return rest < 2.5 ? m - rest : m - rest + 5
  })
}