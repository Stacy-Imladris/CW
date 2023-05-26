function mergeStrings(first, second){
  if (first.endsWith(second)) return first
  let matchingLength = 0
  let i = 1
  while (!first.endsWith(second.substring(0, i))) {
    matchingLength = i
    i++
  }
  matchingLength++
  
  return first.substring(0, first.length - matchingLength) + second
}