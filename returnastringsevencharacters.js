function evenChars(string) {
  if (string.length < 2 || string.length > 100) return 'invalid string'
  return string.split('').filter((f, i) => i % 2)
}