function strong(n) {
    const factorials = {'0': 1, '1': 1, '2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040, '8': 40320, '9': 362880}
    return n === [...n.toString()].map(m => factorials[m]).reduce((acc, r) => acc + r) ? "STRONG!!!!" : "Not Strong !!"
  }