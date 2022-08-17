function isLucky(n) {
  const sum = [...n.toString()].reduce((acc, r) => +r + acc, 0)
  return !sum || !(sum % 9)
}