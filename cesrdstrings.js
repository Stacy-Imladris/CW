function uncensor(infected, discovered) {
  let arr = [...discovered]
  return [...infected].map(m => m === '*' ? arr.splice(0, 1)[0] : m).join('')
}