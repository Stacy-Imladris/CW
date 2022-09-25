function every(arr, interval = 1, start = 0){
    return arr.slice(start).filter((f, i) => !(i % interval))
  }