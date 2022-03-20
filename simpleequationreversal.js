function solve(eq){
    let s = ''
    let arr = eq.split('').map(m => {
      if (m === '*' || m === '/' || m === '+' || m === '-') {
        s += m
        return '-'
      } else return m
    })
    s = s.split('').reverse().join('')
    return arr.join('').split('-').reverse().map((m, i) => s[i] ? m + s[i] : m ).join('')
  }