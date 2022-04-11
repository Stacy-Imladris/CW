function longestWord(stringOfWords){
    let arr = stringOfWords.split(' ')
    let max = Math.max(...arr.map(m => m.length))
    return arr.filter(f => f.length === max).slice(-1).join('')
  }