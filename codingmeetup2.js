const greetDevelopers = (list) => list.map(m => ({...m, greeting: `Hi ${m.firstName}, what do you like the most about ${m.language}?`}))