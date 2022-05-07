function howManyGifts(maxBudget, gifts){
  return gifts.sort((a, b) => a - b).reduce((acc, r) => {
    if (r <= maxBudget) {
      acc++
      maxBudget -= r
    }
    return acc
  }, 0)
}