function sort(initialArray, sortingArray) {
    return initialArray.map((m, i) => initialArray[sortingArray.findIndex(f => f === i)])
  }