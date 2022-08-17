function countConsonants(str) {
    return [...new Set([...str.toLowerCase()].filter(f => !/^[aeiou0-9 !]/.test(f)))].length
  }