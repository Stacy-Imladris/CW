const allContinents = (list) => {
  let arr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  let c = list.map(m => m.continent)
  for (let i = 0; i < arr.length; i++){
    if (c.indexOf(arr[i]) < 0) return false
  }
  return true
}