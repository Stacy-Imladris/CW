function sevenAte9(str) {
  return [...str].filter((f, i, arr) => !(f === '9' && arr[i - 1] === '7' && arr[i + 1] === '7')).join('')
}