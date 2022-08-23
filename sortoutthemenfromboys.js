function menFromBoys(arr){
  let data = [...new Set(arr)]
  let even = data.filter(f => !(f % 2)).sort((a, b) => a > b ? 1 : -1)
  let odd = data.filter(f => f % 2).sort((a, b) => b > a ? 1 : -1)
  return [...even, ...odd]
}