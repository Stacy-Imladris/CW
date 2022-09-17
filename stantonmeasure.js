const stantonMeasure = (arr) => {
    const getNum = (array, num) => arr.filter(f => f === num).length
    return arr.filter(f => f === getNum(arr, 1)).length
  }