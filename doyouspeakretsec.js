function reverseByCenter(s){
  let half = Math.floor(s.length / 2)
  return s.length % 2 === 0 ? `${s.slice(-half)}${s.slice(0, half)}` 
  : `${s.slice(-half)}${s[half]}${s.slice(0, half)}`
}