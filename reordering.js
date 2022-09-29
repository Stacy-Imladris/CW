function reOrdering(text){
  let arr = text.split(' ')
  let word = arr.filter(f => f[0].toUpperCase() === f[0])[0]
  let rest = arr.filter(f => f[0].toLowerCase() === f[0])
  return rest.length ? [word, ...rest].join(' ') : word
}