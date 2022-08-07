function solve(arr){
    let array = [...new Set(arr)]
    let entries = Object.entries(array.reduce((obj, r) => {
      obj[Math.abs(r)] = (obj[Math.abs(r)] | 0) + 1
      return obj
    }, {}))
    return array.find(f => Math.abs(f) === +entries.filter(f => f[1] === 1)[0][0])
  }