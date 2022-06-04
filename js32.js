function roundIt(n){
  let arr = [...n.toString()]
  let start = arr.slice(0, arr.indexOf('.')).length
  let end = arr.slice(arr.indexOf('.') + 1).length
  return start < end ? Math.ceil(n) : start > end ? Math.floor(n) : Math.round(n)
}