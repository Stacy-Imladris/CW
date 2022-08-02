function calc(x){
    let n = [...x].map(m => m.charCodeAt()).join('')
    let n2 = n.replace(/7/g, '1')
    return [...n].reduce((acc, r) => +r + acc, 0) - [...n2].reduce((acc, r) => +r + acc, 0)
  }