function reverseMessage(str) {
    return str ? str.toLowerCase().split(' ').reverse().map(m => {
        let rev = [...m].reverse().join('')
        return rev ? rev[0].toUpperCase() + rev.substring(1) : ''
      }).join(' ') : ''
  }