function sc(apple){
  let a = apple.findIndex(f => f.includes('B'))
  let b = apple[a].findIndex(f => f === 'B')
  return [a, b]
}