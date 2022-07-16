function differences(a) {
  const getDif = (arr) => arr.map((m, i) => Math.abs(m - arr[i - 1])).slice(1)
  let res = a
  while (res.length > 1) {
    res = getDif(res)
  }
  return res[0]
}