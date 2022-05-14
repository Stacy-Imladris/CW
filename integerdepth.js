function computeDepth(x) {
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let count = 0, i = 1
  while (arr.length) {
    [...(x * i).toString()].forEach(fe => {
      let ind = arr.findIndex(f => f === fe)
      if (ind >= 0) arr.splice(ind, 1)
    })
    count++
    i++
  }
  return count
}