let isAnagram = function(test, original) {
    let arr1 = [...original.toLowerCase()]
    let arr2 = [...test.toLowerCase()]
    for (let i = 0; i < arr1.length; i++) {
      let ind = arr2.indexOf(arr1[i])
      if (ind > -1) arr2.splice(ind, 1)
      else return false
    }
    return !arr2.length
  }
  