function isKiss(words){
  let arr = words.split(' ')
  return arr.every(e => e.length <= arr.length) ? 'Good work Joe!' : 'Keep It Simple Stupid'
}