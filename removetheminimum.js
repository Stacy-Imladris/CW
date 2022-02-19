const removeSmallest = (numbers) => {
    let min = Math.min(...numbers)
    let copy = [...numbers]
    let deleted = copy.splice(numbers.indexOf(min), 1)
    return copy
  }