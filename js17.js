const firstToLast = (str,c) => {
  return str.indexOf(c) === -1 ? -1 
  : str.indexOf(c, str.indexOf(c) + 1) === -1 ? 0
  : str.lastIndexOf(c) - str.indexOf(c)
}