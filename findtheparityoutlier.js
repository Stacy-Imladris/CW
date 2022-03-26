function findOutlier(integers){
  let odd = integers.filter(f => Math.abs(f) % 2 === 1)
  let even = integers.filter(f => Math.abs(f) % 2 === 0)
  return odd.length > even.length ? even[0] : odd[0]
}