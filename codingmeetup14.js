const orderFood = (list) => {
    return list.reduce((obj, r) => {
      obj[r.meal] = (obj[r.meal] | 0) + 1
      return obj
    }, {})
  }