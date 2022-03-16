function unusedDigits(){
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let args = Array.from(arguments).map(String).reduce((str, r) => str + r)
    return arr.filter(f => !args.includes(f)).join('')
  }