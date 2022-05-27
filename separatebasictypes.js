const separateTypes = input => input.reduce((obj, r) => {
    obj[typeof r] ? obj[typeof r].push(r) : obj[typeof r] = [r]
    return obj
  }, {})