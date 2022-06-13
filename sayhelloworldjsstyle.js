var say = function(string1) {
  function inner(str) {
    return `${string1} ${str}`
  }
  return inner
}