const solution = mtrx => {
  let arr = mtrx.filter(f => f.includes('x') && f.includes('>'))
  return arr.length > 0 && arr[0].indexOf('x') > arr[0].indexOf('>')
}