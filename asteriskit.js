const asteriscIt = n => {
  let arg = typeof n === 'number' ? [...n.toString()] : typeof n === 'string' ? [...n] : [...n.join('')]
  return arg.map((m, i) => i === 0 || (m % 2 || arg[i - 1] % 2) ? m : '*' + m).join('')
}