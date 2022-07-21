function arrayMash (array1, array2) {
  let res = []
  array1.forEach((el, i) => res.push(el, array2[i]))
  return res
}