function amountOfPages(summary){
    let result = ''
    for (let i = 1; result.length < summary; i++){
      result += i
      if (result.length === summary) return i
    }
  }