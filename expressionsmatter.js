function expressionMatter(a, b, c) {
    let arr = [a, b, c]
    return arr.filter(x => x === 1).length === 3 || arr[0] === 1 && arr[2] === 1 ? arr[0] + arr[1] + arr[2] : 
    !arr.includes(1) ? arr[0] * arr[1] * arr[2] :
    arr[2] === 1 || arr[1] === 1 && arr[0] >= arr [2] ? arr[0] * (arr[1] + arr[2]) :
    (arr[0] + arr[1]) * arr[2]
  }