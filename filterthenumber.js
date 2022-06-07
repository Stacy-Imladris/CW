let FilterString = function(value) {
  return +[...value].map(Number).filter(f => !isNaN(f)).join('')
}