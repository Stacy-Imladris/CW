function mergeStrings(first, second){
  if (first.endsWith(second)) return first
  if (!first || !second) return first + second
  for (let i = 0; i < first.length; i++) {
    if (second.startsWith(first.substring(i))) {
      return first.substring(0, i) + second
    }
  }
  return first + second
}