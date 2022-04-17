function getStrings(city){
    const obj = [...city.toLowerCase()].reduce((obj, r) => {
      if (r !== ' ') {
        obj[r] = (obj[r] | 0) + 1
      }
      return obj
    }, {})
    return Object.keys(obj).map(m => `${m}:${'*'.repeat(obj[m])}`).join()
  }