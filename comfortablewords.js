const comfortableWord = word => {
  const left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b']
  const right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm']
  if (left.includes(word[0])) return [...word].every((e, i, arr) => (i % 2) ? right.includes(arr[i]) : left.includes(arr[i]))
  else {return [...word].every((e, i, arr) => (i % 2) ? left.includes(arr[i]) : right.includes(arr[i]))}
}