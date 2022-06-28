function bald(x){
  const hairs = [...x].filter(f => f === '/').length
  const word = !hairs ? 'Clean!' : hairs === 1 ? 'Unicorn!' : hairs === 2 ? 'Homer!'
               : hairs <= 5 ? 'Careless!' : 'Hobo!'
  return ['-'.repeat(x.length), word]
}