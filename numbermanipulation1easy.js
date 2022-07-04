function manipulate(num) { 
    let arr = [...num.toString()]
    let half = Math.floor(arr.length / 2)
    return +[...arr.slice(0, half), '0'.repeat(arr.length % 2 ? half + 1 : half)].join('')
  } 