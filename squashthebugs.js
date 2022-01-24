const findLongest = (str) => str.split(' ')
  .map(m => m.length).reduce((max, i) => i > max ? i : max)