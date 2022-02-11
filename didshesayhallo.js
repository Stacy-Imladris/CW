function validateHello(greetings) {
    let obj = {
      'hello': 'english',
      'ciao': 'italian',
      'salut': 'french',
      'hallo': 'german',
      'hola': 'spanish',
      'ahoj': 'czech republic',
      'czesc': 'polish',
    }
    let keys = Object.keys(obj)
    return keys.reduce((res, i) => greetings.toLowerCase().includes(i) ? res += 1 : res, 0) > 0
  }