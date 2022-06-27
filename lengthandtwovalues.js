function alternate(n, firstValue, secondValue){
  let res = Array(Math.floor(n / 2)).fill([firstValue, secondValue]).flat()
  if (n % 2) res.push(firstValue)
  return res
}