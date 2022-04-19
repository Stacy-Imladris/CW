function solve(a, b){
  let result = []
  for (let i = 0; i < b.length; i++) {
    result.push(a.filter(f => f === b[i]).length)
  }
  return result
}