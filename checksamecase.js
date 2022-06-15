function sameCase(a, b){
  const check = letter => {
    const l = letter.charCodeAt()
    return l >= 65 && l <= 90 || l >= 97 && l <= 122
  }
  const getCase = letter => letter.toLowerCase() === letter
  return !check(a) || !check(b) ? -1 : getCase(a) === getCase(b) ? 1 : 0 
}