function reverseBits (n) {
  let bits = [...n.toString(2)].reverse().join('')
  return parseInt(bits, 2)
}