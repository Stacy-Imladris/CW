const alternateCase = s => [...s].map(m => m.toLowerCase() === m ? m.toUpperCase() : m.toLowerCase()).join('')