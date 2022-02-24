const getFirstPython = (list) => {
    let answer = list.find(f => f.language === 'Python')
    return answer ? `${answer.firstName}, ${answer.country}` : 'There will be no Python developers'
  }