const remove = (string) => string.split(' ').filter(f => {
  let index1 = f.indexOf('!')
  let index2 = f.indexOf('!', index1 + 1)
  return index1 === -1 || index2 !== -1
  }).join(' ')