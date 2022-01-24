const calculateAge = (birth, year) => {
    let result = Math.abs(year - birth)
    let word = result === 1 ? 'year' : 'years'
    return birth === year ? `You were born this very year!` :
      year > birth ? `You are ${result} ${word} old.` : `You will be born in ${result} ${word}.`
  }
  