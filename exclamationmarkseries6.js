const remove = (s, n) => {
    return s.split('').reduce((str, r) => {
      if (r !== '!' || r === '!' && n === 0) {
        str = str + r
      } else {
        n -= 1
      }
      return str
    }, '')
  }