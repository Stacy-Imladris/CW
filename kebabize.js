function kebabize(str) {
  let result = str.split('').map((m, i) => m.toUpperCase() === m ? '-' + m.toLowerCase() : m).filter(f => isNaN(+f)).join('')
  return result[0] === '-' ? result.slice(1) : result
}