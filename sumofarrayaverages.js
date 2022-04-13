const sumAverage = arr => {
    const getAverage = (array) => array.reduce((acc, r) => acc + r) / array.length
    return Math.floor(arr.map(getAverage).reduce((acc, r) => acc + r))
  }