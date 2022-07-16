function jeringonza(args) {
  return [...args].map(m => /[aeiou]/.test(m) ? `${m}p${m}` : /[AEIOU]/.test(m) ? `${m}P${m}` : m).join('')
}