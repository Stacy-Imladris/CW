const askForMissingDetails = (list) => {
    return list.map(m => {
      let keys = Object.keys(m)
      let values = Object.values(m)
      let question = values.includes(null) ? `Hi, could you please provide your ${keys[values.indexOf(null)]}.` : null
      return question ? {...m, question} : m
    }).filter(f => f.question)
  }