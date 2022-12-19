const tiyFizzBuzz = sentence => [...sentence].map(m => /[aeiou]/.test(m) ? 'Yard' 
    : /[AEIOU]/.test(m) ? 'Iron Yard' : m.toLowerCase() === m ? m : 'Iron').join('')