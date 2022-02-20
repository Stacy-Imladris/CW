function isDivisible(){
  let args = arguments
  let arr = Array.prototype.slice.call(args, 1)
  return arr.every(i => args[0] % i === 0)
}