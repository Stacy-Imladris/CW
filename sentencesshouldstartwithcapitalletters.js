function fix(paragraph){
    return [...paragraph].map((m, i, arr) => i === 0 || arr[i - 2] === '.' ? m.toUpperCase() : m).join('')
  }