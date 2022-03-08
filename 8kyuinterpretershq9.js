const HQ9 = (code) => {
  let arr = Array(99).fill(0)
  .map((m, i) => (i + 1) + (i === 0 ? ' bottle' : ' bottles') +
       ' of beer on the wall, ' + (i + 1) + (i === 0 ? ' bottle' : ' bottles') + ' of beer.\nTake one down and pass it around, ' + 
       (i === 0 ? 'no more' : i) + (i === 1 ? ' bottle' : ' bottles') + ' of beer on the wall.\n').reverse()
  return code === 'H' ? 'Hello World!' : code === 'Q' ? code : code === '9' ? 
    arr.join('') + 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.' : undefined
}