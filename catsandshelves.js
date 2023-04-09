const solution = (start, finish) => {
  const dif = finish - start
  return Math.floor(dif / 3) + dif % 3
}