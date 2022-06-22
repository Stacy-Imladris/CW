const findChildren = dancingBrigade => [...dancingBrigade.toLowerCase()]
  .sort().map((m, i, arr) => i === 0 || arr[i - 1] !== m ? m.toUpperCase() : m).join('')