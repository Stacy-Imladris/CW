function getElement(array, indexes) {
    let res = array
    for (let el in indexes) {
      res = res[indexes[el]]
    }
    return res
  }