function solve(n) {
    const banknotes = [500, 200, 100, 50, 20, 10]
    if (n % 10) return -1
    let count = 0
    for(let i = 0; i < banknotes.length && n > 0; i++) {
      let num = Math.floor(n / banknotes[i])
      count += num
      n -= banknotes[i] * num
    }
    return count
  }