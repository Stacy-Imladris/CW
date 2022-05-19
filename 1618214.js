function add(num1, num2) {
    let arr = [num1, num2].sort((a, b) => b - a)
    let first = [...arr[0].toString()].map(Number)
    let sec = [...arr[1].toString()].map(Number)
    return +first.reduceRight((res, r) => sec.length ? sec.splice(-1, 1)[0] + r + res : r + res, '')
  }