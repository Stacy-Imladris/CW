function modifyMultiply (str,loc,num) {
    let el = str.split(' ')[loc]
    return Array(num).fill(el).join('-')
  }