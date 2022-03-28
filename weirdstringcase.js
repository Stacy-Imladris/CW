const toWeirdCase = (string) => {
  return string.split(' ').map(m => m.split('')
               .map((el, ind) => ind % 2 === 1 ? el.toLowerCase() : el.toUpperCase())
               .join('')).join(' ')
}