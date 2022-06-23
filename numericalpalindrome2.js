function palindrome(num) {
  if (num !== parseInt(num) || num < 0) return 'Not valid'
  return ([...num.toString()]
          .filter((f, i, arr) => f === arr[i - 1] || f === arr[i - 2]).length >= 1)
}