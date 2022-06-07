let splitInParts = function(s, partLength){
  let arr = [...s]
  let res = ''
  for (let i = partLength; i < arr.length;) {
    res += arr.splice(0, partLength).join('') + ' '
  }
  return `${res}${arr.join('')}`
}