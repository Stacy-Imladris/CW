function uniqueSum(lst){
  return lst.length ? [...new Set(lst)].reduce((acc, r) => acc + r) : null
}