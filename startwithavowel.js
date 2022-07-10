function vowelStart(str){
  return [...str.toLowerCase()]
    .map((m, i) => i !== 0 && /[aeiou]/.test(m) ? ` ${m}` : m === ' ' ? '' : m)
    .join('').replace(/[^a-z0-9 ]/g, '')
}