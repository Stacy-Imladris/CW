function avgArray(arr) {
    let res = []
    for (let i = 0; i < arr[0].length; i++) {
      let elem = arr.map(m => m[i]).reduce((acc, r) => acc + r) / arr.length
      res.push(elem)
    }
    return res
  }