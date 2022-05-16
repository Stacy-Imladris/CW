function isVeryEvenNumber(n) {
  while (n > 9) {
    n = [...n.toString()].map(Number).reduce((acc, r) => acc + r)
  }
  return !(n % 2)
}