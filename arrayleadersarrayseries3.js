function arrayLeaders(numbers){
    return numbers.filter((f, i) => {
      let arr = numbers.slice(i + 1)
      return f > (arr.length ? arr.reduce((sum, r) => sum + r) : true)
    })
  }