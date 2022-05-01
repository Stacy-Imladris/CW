function checkThreeAndTwo(array) {
    let obj = array.reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {})
    return Object.values(obj).includes(2) && Object.values(obj).includes(3)
  }