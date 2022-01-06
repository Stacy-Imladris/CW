const findOdd = (a) => { 
    let obj = a.reduce((obj, el) => {
      obj[el] = (obj[el] || 0) + 1; 
      return obj }, {})
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    return Number(keys[values.indexOf(values.find(v => v % 2 === 1))])
  }