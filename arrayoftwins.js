function twins(myArray){
  const values = Object.values(myArray.reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {}))
  return values.every(e => e === 2)
}