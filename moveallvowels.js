function moveVowel(input) {
  let arr = [...input].reduce((arr, r) => {
    if ('aeoui'.includes(r)) {
      arr[1] += r
    } else {
      arr[0] += r
    }
    return arr
  }, ['', ''])
  return arr.join('')
}