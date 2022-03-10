const charFreq = (message) => {
  return message.split('').reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
  }, {})
}