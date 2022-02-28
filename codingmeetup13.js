const isLanguageDiverse = (list) => {
    let values = Object.values(list.reduce((obj, r) => {
      obj[r.language] = (obj[r.language] | 0) + 1
      return obj
    }, {})).sort((a, b) => a - b)
    return values[values.length - 1] / 2 <= values[0]
  }