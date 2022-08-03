function reduceByRules(numbers, rules){
  let n = -1
  return numbers.reduce((acc, r) => {
    n = n === rules.length - 1 ? 0 : n + 1
    return rules[n](acc, r)
  })
}