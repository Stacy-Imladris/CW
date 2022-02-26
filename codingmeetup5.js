const countLanguages = (list) => {
    return list.reduce((obj, r) => {
      obj[r.language] = (obj[r.language] | 0) + 1
      return obj
    }, {})
  }