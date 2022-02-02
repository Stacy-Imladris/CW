const rowWeights = (array) => {
  return array.reduce((arr, r, i) => {
    i % 2 === 0 ? arr[0] += r : arr[1] += r
    return arr  
  }, [0, 0])
}