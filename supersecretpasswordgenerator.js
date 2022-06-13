const superSecretChars = {'a': '@', 's': '$', 'o': '0', 'h': '5', 'x': '*'};
function createSSP(password){
  let keys = Object.keys(superSecretChars)
  return [...password].map(m => keys.includes(m.toLowerCase()) ? superSecretChars[m.toLowerCase()] : m).join('')
}