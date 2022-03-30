const duplicateEncode = (word) => {
    let newWord = word.toLowerCase().split('')
    const obj = newWord.reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {})
    return newWord.map(m => obj[m] > 1 ? ')' : '(').join('')
  }