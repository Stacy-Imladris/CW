function decipherThis(str) {
  let alph = str.split('').filter(f => !isNaN(+f)).join('').split(' ').map(m => String.fromCharCode(m))
  return str.split('').filter(f => !'0123456789'.includes(f)).join('').split(' ')
    .map((m, i) => {
      let arr = m.split('')
      let first = arr.pop()
      let last = arr.shift()
      arr.push(last)
      arr.unshift(first)
    return alph[i] + arr.join('')
    }).join(' ')
}