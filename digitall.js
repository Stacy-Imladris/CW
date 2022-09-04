const digitAll = x => typeof x === 'string' 
  ? [...x].filter(f => !isNaN(+f) && f !== ' ').join('') : 'Invalid input !'