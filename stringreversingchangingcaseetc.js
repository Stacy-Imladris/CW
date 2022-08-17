function reverseAndMirror(s1,s2) {
  const reverseCase = (str) => [...str]
    .map(m => m.toLowerCase() === m ? m.toUpperCase() : m.toLowerCase()).join('')
  return `${[...reverseCase(s2)].reverse().join('')}@@@${[...reverseCase(s1)].reverse().join('') + reverseCase(s1)}`
}