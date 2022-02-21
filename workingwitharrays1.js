const withoutLast = (arr) => {
  let copy = [...arr]
  copy.pop()
  return copy
}