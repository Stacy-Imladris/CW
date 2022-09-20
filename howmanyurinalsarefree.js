function getFreeUrinals(urinals){
  if ([...urinals].some((s, i, arr) => s === '1' && (arr[i - 1] === '1' || arr[i + 1] === '1'))) return -1
  let arr = [...urinals].map(Number)
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && !arr[i - 1] && !arr[i + 1]) {
      arr[i] = 1
      res++
    }
  }
  return res
}