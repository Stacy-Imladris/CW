const solution = (string) => string.split('').map(m => m.toUpperCase() === m ? ' ' + m : m).join('')
