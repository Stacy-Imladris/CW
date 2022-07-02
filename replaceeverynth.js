function replaceNth(text, n, oldValue, newValue) {
    let count = 0
    if (n <= 0) return text
    return [...text].map(m => {
        if (m === oldValue) {
          count++
          return [count, m]
         }
        return m
      }).map(m => Array.isArray(m) && m[0] % n === 0 ? newValue : Array.isArray(m) ? m[1] : m).join('')
  }