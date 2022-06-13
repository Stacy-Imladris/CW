function getMissingElement(arr){
    let res = arr.sort().filter((f, i) => f !== i)
    return res.length ? res[0] - 1 : 9
  }