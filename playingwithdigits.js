function digPow(n, p){
    const int = [...n.toString()].map(Number).map((m, i) => Math.pow(m, p + i)).reduce((acc, r) => acc + r) / n
    return Number.isInteger(int) ? int : -1
  }