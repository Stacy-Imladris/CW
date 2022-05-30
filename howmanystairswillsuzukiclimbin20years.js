function stairsIn20(s){
  const sum = (acc, r) => acc + r
  return s.map(m => m.reduce(sum)).reduce(sum) * 20
}