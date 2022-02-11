function colorOf(r,g,b){
    let args = Array.from(arguments)
    let result = args.map(m => m.toString(16).length > 1 ? m.toString(16) : '0' + m.toString(16))
    return '#' + result.join('')
  }