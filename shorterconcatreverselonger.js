const shorter_reverse_longer = (a, b) => {
    const [longest, shortest] = b.length > a.length ? [b, a] : [a, b]
    return `${shortest}${longest.split('').reverse().join('')}${shortest}`
  }