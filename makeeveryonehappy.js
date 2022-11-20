function smile(text) {
  return [...text].map((m, i) => {
    if ([':', ';', '=', '~', '-'].includes(text[i - 1])) {
      return m === '(' ? ')' : m === '[' ? ']' : m
    } else return m
  }).join('')
}