function switcheroo(x){
    let obj = {a: 'b', b: 'a', c: 'c'}
    return [...x].map(m => obj[m]).join('')
  }