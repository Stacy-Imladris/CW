function makePassword(phrase) {
    return phrase.split(' ').map(m => m.split('')[0].toLowerCase() === 'i' ? '1' 
          : m.split('')[0].toLowerCase() === 'o' ? '0' 
          : m.split('')[0].toLowerCase() === 's' ? '5' : m.split('')[0]).join('')
}

function makePassword(phrase) {
  return phrase.split(' ').map(m => m.split('')[0]).map(i => i.toLowerCase() === 'i' ? '1' 
                                                        : i.toLowerCase() === 'o' ? '0' 
                                                        : i.toLowerCase() === 's' ? '5' : i).join('')
}