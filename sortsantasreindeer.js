const sortReindeer = (reindeerNames) => {
    let arr = reindeerNames.map(m => m.split(' '))
    return arr.sort((a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0).map(m => m.join(' '))
  }