function meeting(s) {
  let str = s.toUpperCase().split(';').map(m => m.split(':'))
  return str.sort((a, b) => {
    if (a[1] > b[1]) return 1
    if (a[1] < b[1]) return -1
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  }).map(m => `(${m[1]}, ${m[0]})`).join('')
}