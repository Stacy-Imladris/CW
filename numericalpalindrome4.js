function palindrome(num) { 
  if (typeof num !== 'number' || num < 0) return 'Not valid'
  if (num < 10) return 11
  const check = (n) => n.toString() === [...n.toString()].reverse().join('')
  let res = num
  let count = 1
  while (!check(res)) {
    if (check(res - count)) res -= count
    if (check(res + count)) res += count
    count++
  }
  return res
}