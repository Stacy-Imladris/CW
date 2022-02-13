const alienLanguage = (str) => {
    return str.toUpperCase().split(' ')
      .map(m => m.slice(0, m.length - 1) + m.substring(m.length - 1).toLowerCase()).join(' ')
  }