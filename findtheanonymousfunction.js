const FindFunction = function(func, arr) {
    const callback = func.find(f => typeof f === 'function')
    return arr.filter(callback)
  }