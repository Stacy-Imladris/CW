function mygcd(x, y) {
    let div = x > y ? y : x
    while (div > 0) {
      if (x % div === 0 && y % div === 0) break
      div--
    }
    return div
  }