function connotation(str) {
  let arr = str.split(' ').map(m => !m[0] ? null : m[0].toLowerCase().charCodeAt() < 110 ? 1 : -1)
  return arr.filter(f => f === 1).length >= arr.filter(f => f === -1).length
}