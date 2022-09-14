function objectType(obj) {
    let args = [...arguments]
    const getRes = (obj) => Object.prototype.toString.call(obj)
    return args.length ? getRes(obj) : getRes(null)
  }