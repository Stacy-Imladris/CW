function findSum(){
    const arr = [...arguments]
    return !arr.length ? 0 : arr.some(s => s < 0) ? -1 : arr.reduce((acc, r) => acc + r)
  }