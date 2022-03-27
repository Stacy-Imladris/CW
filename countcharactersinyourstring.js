const count = (string) => {  
    return string.split('').reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {})
  }