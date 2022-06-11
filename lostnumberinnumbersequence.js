function findDeletedNumber(arr, mixArr) {
    let res = arr.filter(f => !mixArr.includes(f))
    return !res.length ? 0 : res[0]
  }