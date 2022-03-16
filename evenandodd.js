function evenAndOdd(num){
    return num.toString().split('').reduce((arr, r) => {
      r % 2 === 1 ? arr[1] += r : arr[0] += r
      return arr
    }, ['', '']).map(Number)
  }