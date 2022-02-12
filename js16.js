const cutIt = (arr) => {
    let lengthOfMin = arr.reduce((min, r) => r.length < min.length ? r : min).length
    return arr.map(m => m.substr(0, lengthOfMin))
  }