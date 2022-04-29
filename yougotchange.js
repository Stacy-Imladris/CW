function giveChange(amount) {
  let sum = amount
  const arr = [100, 50, 20, 10, 5, 1]
  return Array.from(arr, (i) => {
    let res = Math.floor(sum / i)
    sum = sum % i
    return res
  }).reverse()
}