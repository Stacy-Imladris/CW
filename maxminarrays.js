function solve(arr){
  const half = Math.ceil(arr.length / 2)
  const max = arr.sort((a, b) => b - a).splice(0, half)
  const min = arr.reverse()
  return max.reduce((res, r, i) => {
    res.push(r)
    arr[i] && res.push(arr[i])
    return res
  }, [])
}