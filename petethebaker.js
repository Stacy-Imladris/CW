function cakes(recipe, available) {
  let count = 0
  let recipeArr = Object.entries(recipe)
  while (recipeArr.every(e => available[e[0]] >= e[1])) {
    recipeArr.forEach(fe => available[fe[0]] -= fe[1])
    count++
  }
  return count
}