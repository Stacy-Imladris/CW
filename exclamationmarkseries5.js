function remove (string) {
    let arr = string.split(' ')
    while (arr.some(s => s.endsWith('!'))) {
      arr = arr.map(m => m.endsWith('!') ? m.substring(0, m.length - 1) : m)
    }
    return arr.join(' ')
  }