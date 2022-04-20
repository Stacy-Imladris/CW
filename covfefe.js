function covfefe(str){
    let result = str.replace(/coverage/g, 'covfefe')
    return str === result ? str + ' covfefe' : result
  }