function battle(x, y) {
  const getPower = (n) => [...n]
    .map(m => m.toLowerCase() === m ? (m.charCodeAt() - 96) / 2 : m.charCodeAt() - 64)
    .reduce((sum, r) => sum + r)
  return getPower(x) > getPower(y) ? x : getPower(x) < getPower(y) ? y : 'Tie!'
}