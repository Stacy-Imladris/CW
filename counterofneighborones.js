function onesCounter(input) {
  let count = 0
  let arr = input.reduce((arr, r) => {
      if (r !== 1) {
        arr.push(count)
        count = 0
      }
      else count++
      return arr
    }, [])
  arr.push(count)
  return arr.filter(f => f)
}