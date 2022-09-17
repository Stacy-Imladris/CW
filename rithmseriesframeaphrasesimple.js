function frame(phrase, ch = '*') {
    let edge = ch.repeat(4 + phrase.length)
    let center = `${ch}${' '.repeat(2 + phrase.length)}${ch}`
    let res = [edge, center, center, edge]
    if (phrase) res.splice(2, 0, `${ch} ${phrase} ${ch}`)
    return res.join('\n')
  }