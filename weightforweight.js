const orderWeight = strng => strng.split(' ').sort((a, b) => {
    let aSum = [...a].reduce((acc, r) => +r + acc, 0)
    let bSum = [...b].reduce((acc, r) => +r + acc, 0)
    if (aSum > bSum) return 1
    if (aSum < bSum) return -1
    else return a > b ? 1 : a < b ? -1 : 0
  }).join(' ')