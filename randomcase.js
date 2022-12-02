const randomCase = x => [...x].map(m => {
    let num = Math.random()
    return num < 0.5 ? m.toLowerCase() : m.toUpperCase()
  }).join('')