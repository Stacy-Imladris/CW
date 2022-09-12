let flatten = function (array){
  let res = []
  array.forEach(el => res = res.concat(el))
  return res
}