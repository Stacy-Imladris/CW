function whoseBicycle(diary1, diary2, diary3) {
  const getSum = obj => Object.values(obj).reduce((acc, r) => acc + r)
  let arr = [getSum(diary1), getSum(diary2), getSum(diary3)]
  let max = arr.reverse().indexOf(Math.max(...arr))
  return `I need to buy a bicycle for my ${max === 0 ? 'third' : max === 1 ? 'second' : 'first'} son.`
}