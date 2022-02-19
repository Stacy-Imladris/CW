const dontGiveMeFive = (start, end) => {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr.filter(f => !(f + '').includes('5')).length
}