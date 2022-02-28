const findSenior = (list) => {
    let age = Math.max.apply(null, list.map(m => m.age))
    return list.filter(f => f.age === age)
  }