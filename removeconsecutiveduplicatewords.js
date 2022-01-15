const removeConsecutiveDuplicates = s => {
  let arr = s.split(' ')
  return arr.filter((i, index) => i !== arr[index -1]).join(' ')
}