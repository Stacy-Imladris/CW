const evenator = str => str.replace(/[.,?!_]/g, '').split(' ')
  .map(m => m.length % 2 ? m + m[m.length - 1] : m).join(' ')