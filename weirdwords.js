function nextLetter(str) {
    return [...str].map(m => m === 'z' ? 'a' : m === 'Z' ? 'A' : /[a-yA-Y]/.test(m) 
                        ? String.fromCharCode(m.charCodeAt() + 1) : m).join('')
  }