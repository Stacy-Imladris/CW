function magicSum(numbers) {
    let arr = numbers.filter(f => f.toString().includes('3') && f%2)
    return arr.length ? arr.reduce((acc, r) => acc + r) : 0
  }