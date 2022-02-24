const minimumSteps = (numbers, value) => {
    let arr = numbers.sort((a, b) => a - b)
    arr.push(1)
    let answer = 0
    let sum = 0
    arr.some((s, i) => {
      if (sum >= value) {
        answer = i
        return answer
        }
        else sum = sum + s
      })
    return answer - 1
  }