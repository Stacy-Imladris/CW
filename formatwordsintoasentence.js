function formatWords(words){
  if (words === null) return ''
  let arr = words.filter(f => f)
  if (arr.length <= 1) return arr.toString()
  return `${arr.slice(0, arr.length - 1).join(', ')} and ${arr[arr.length - 1]}`
}