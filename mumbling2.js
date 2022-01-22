function accum(s) {
    let arr = s.split('').map((m, i) => m.toUpperCase() + m.repeat(i).toLowerCase())
    return arr.join('-')
  }