function arrAdder(arr) {
  let result = []
  for (let i = 0; i < arr[0].length; i++) {
    result.push(arr.map(m => m[i]).join(''))
  }
  return result.join(' ')
}