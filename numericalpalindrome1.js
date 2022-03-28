function palindrome(num) { 
  return typeof num !== 'number' || num < 0 ? "Not valid" : +String(num).split('').reverse().join('') === num
} 