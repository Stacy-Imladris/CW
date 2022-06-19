function bigToSmall(arr){
  let res = []
  arr.forEach(el => res = res.concat(el))
  return res.sort((a, b) => b - a).join('>')
}