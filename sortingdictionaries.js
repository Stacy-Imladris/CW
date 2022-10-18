function sortDict(dict) {
  return Object.entries(dict).sort((a, b) => {
    if (a[1] < b[1]) return 1
    if (a[1] > b[1]) return -1
    else {
      return a[0] < b[0] ? 1 : 0
    }
  }).map(m => [!isNaN(+m[0]) ? +m[0] : m[0], m[1]])
}