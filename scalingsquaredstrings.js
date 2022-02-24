const scale = (strng, k, n) => strng ? strng.split('\n')
   .map(m => m.split('').map(i => i.repeat(k)).join(''))
   .map(s => Array(n).fill(s).join('\n')).join('\n') : ''