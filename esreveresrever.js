function esrever(str){
    let arr = str.substring(0, str.length - 1).split(' ')
    return str ? arr.map(m => [...m].reverse().join('')).reverse().join(' ') + str[str.length - 1] : ''
  }