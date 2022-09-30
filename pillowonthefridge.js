function pillow(s){
  let [s1, s2] = s
  return [...s1].some((s, i) => s === 'n' && s2[i] === 'B')
}