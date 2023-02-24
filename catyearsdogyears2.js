let ownedCatAndDog = function(catYears, dogYears) {
  const getYears = (years, afterThirdYearValue) => {
    let result = years >= 24 ? (years - 24) / afterThirdYearValue + 2 : years >= 15 ? 1 : 0
    return Math.floor(result)
  }
  return [getYears(catYears, 4), getYears(dogYears, 5)];
}