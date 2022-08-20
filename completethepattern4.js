function pattern(n){
  if (n <= 0) return ''
  const res = Array(n).fill(0).map((m, i) => i + 1)
  return Array(n).fill(res).map((m, i) => [...m].slice(i).join('')).join('\n')
}