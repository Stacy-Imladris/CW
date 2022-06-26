function changer(str) { 
  let a = [...str.toLowerCase()]
  return a.map(m => {
    let char = m.charCodeAt()
    if (char >=97 && char < 122) {
        let b = String.fromCharCode(m.charCodeAt() + 1)
        return 'aeiou'.includes(b) ? b.toUpperCase() : b.toLowerCase()
    }
    if (char === 122) return 'A'
    return m
  }).join('')
}