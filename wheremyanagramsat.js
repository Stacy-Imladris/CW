function anagrams(word, words) {
  let arr = [...word]
  return words.filter(f => {
    let a = [...f]
    for (let i = 0; i < arr.length; i++) {
      let ind = a.indexOf(arr[i])
      if (ind > -1) {
        a.splice(ind, 1)
      }
    }
    return a.length === 0
  })
}