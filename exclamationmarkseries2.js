const remove = (string) => {
  let arr = string.split('')
  for(let i = arr.length - 1; i >= 0; i--){
    if (arr[i] === '!') arr.splice(-1)
    else {
      break
    }
  }
  return arr.join('')
}