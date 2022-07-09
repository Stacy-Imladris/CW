function sortVowels(s){
    return !s || typeof s === 'number' ? '' : [...s]
      .map(m => /[aeiouAEIOU]/.test(m) ? `|${m}` : `${m}|`).join('\n')
  }