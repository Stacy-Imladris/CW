function add(n) {
    return function inner(a) {
      return n + a
    }
  }