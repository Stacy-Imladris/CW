function getWinner(listOfBallots) {
    let obj = listOfBallots.reduce((obj, r) => {
      obj[r] = (obj[r] | 0) + 1
      return obj
    }, {})
    let max = Object.entries(obj).reduce((max, r) => r[1] > max[1] ? r : max)
    return max[1] > Math.floor(listOfBallots.length / 2) ? max[0] : null
  }