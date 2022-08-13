function calculate(...args) {
    return function(...nums) {
      return [...args, ...nums].reduce((acc, r) => acc + r)
    }
  }