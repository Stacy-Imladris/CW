function palindrome(num, s) { 
  if ([num, s].some(s => typeof s !== 'number' || s < 0)) return 'Not valid'
  const check = (n) => n > 9 && n.toString() === [...n.toString()].reverse().join('')
  let res = []
  let count = num
  while (res.length < s) {
    if (check(count)) res.push(count)
    count++
  }
  return res
}