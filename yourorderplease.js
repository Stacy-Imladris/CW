function order(words){
    return words.split(' ')
      .sort((a, b) => +a.split('').find(f => !isNaN(+f)) - +b.split('').find(f => !isNaN(+f))).join(' ')
  }