const highestValue = (a, b) => {
  const sum = str => [...str].map(m => m.charCodeAt()).reduce((acc, r) => acc + r)
  return sum(a) >= sum(b) ? a : b
}