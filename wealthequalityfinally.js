function redistributeWealth(wealth) {
  let a = wealth.reduce((acc, r) => acc + r) / wealth.length
  for (let i = 0; i < wealth.length; i++) wealth[i] = a
}