const solve = (s) => {
    const arr = s.split('').reduce((arr, r) => {
          r.toLowerCase() === r ? arr[0] += 1 : arr[1] += 1
          return arr
      }, [0, 0])
    return arr[0] < arr[1] ? s.toUpperCase() : s.toLowerCase()  
  }