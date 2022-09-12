const secondLargest = array => Array.isArray(array) 
  ? [...new Set(array.filter(f => typeof f === 'string' || typeof f === 'number').map(Number)
      .filter(f => !(isNaN(f))))].sort((a, b) => b - a)[1] : undefined