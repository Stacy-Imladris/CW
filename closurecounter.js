function counter(){
    let n = 1
    return function() {
      return n++
    }
  }