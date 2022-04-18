function mostFrequentItemCount(collection) {
    const obj = collection.reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {})
    return collection.length ? Math.max(...Object.values(obj)) : 0
  }