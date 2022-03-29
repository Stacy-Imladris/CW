function reverse(str){
  return str.trim() ? str.split(' ').map((m, i) => i % 2 === 1 ? m.split('').reverse().join('') : m).join(' ') : ''
}