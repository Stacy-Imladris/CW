const removeBMW = str => typeof str === 'string' 
  ? [...str].filter(f => /[^bmwBMW]/.test(f)).join('') : 'This program only works for text.'