function correctPolishLetters (string) {
  const polishAlphabet = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  }
  return string.replace(/[ąćęłńóśźż]/gi, el => polishAlphabet[el] || el)
}