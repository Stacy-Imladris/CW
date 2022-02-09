function longest(s1, s2) {
    let s = (s1 + s2).split('').sort((a, b) => a > b ? 1 : -1)
    return s.filter((f, i) => f !== s[i - 1]).join('')
  }