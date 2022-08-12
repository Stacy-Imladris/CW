function mineColor(file, rank) {
  let res = ['b', 'd', 'f', 'h'].includes(file) ? 'white' : 'black'
  return rank % 2 ? res : res === 'white' ? 'black' : 'white'
}