function toCamelCase(str){
  let sep = str.includes('-') ? '-' : '_'
  return str.split(sep).map((m, i) => i === 0 ? m 
                            : m.split('').map((el, ind) => ind === 0 ? el.toUpperCase() : el).join('')).join('')
}