function schoolSelection(array) {
  let res = {'Kindergarten': 0, '1st grade': 0, '2nd grade': 0, '3rd grade': 0, '4th grade': 0}
  return array.reduce((res, r) => {
    if (r === 5) res['Kindergarten'] += 1
    if (r === 6) res['1st grade'] += 1
    if (r === 7) res['2nd grade'] += 1
    if (r === 8) res['3rd grade'] += 1
    if (r === 9) res['4th grade'] += 1
    return res
  }, res)
}