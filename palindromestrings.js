function isPalindrome(line) {
  let arr = line.toString().split('').reverse().join('');
  return arr == line;
}