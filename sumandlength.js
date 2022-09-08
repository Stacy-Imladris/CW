function sumLength (arr){
    const array = arr.reduce((acc, r) => {
      if (r > 0) acc[0] += r
      if (r < 0) acc[1]++
      return acc
    }, [0, 0])
    const zeros = arr.filter(f => f === 0).length
    array[1] += Math.ceil(zeros / 2)
    return array.join(' ')
  }