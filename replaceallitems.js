function replaceAll(seq, find, replace) {
    return typeof seq === 'string' ? seq.split('').map(m => m === find ? replace : m).join('') : seq.map(m => m === find ? replace : m)
  }