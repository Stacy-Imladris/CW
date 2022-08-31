function averageLength(arr) {
  let average = Math.round(arr.map(m => m.length).reduce((acc, r) => acc + r) / arr.length)
  return arr.map(m => m[0].repeat(average))
}