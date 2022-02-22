const solution = (digits) => {
  let array = digits.split('')
  let res = array.reduce((arr, r, i) => {
    if (i < array.length - 4) {
      arr[i] = +array.slice(i, i + 5).join('')
    }
    return arr
  }, [])
  return res.reduce((max, r) => r > max ? r : max)
}