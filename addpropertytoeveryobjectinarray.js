const addProperty = (arr) => {
  return arr.map(m => ({...m, usersAnswer: null}))
}

questions = addProperty(questions)