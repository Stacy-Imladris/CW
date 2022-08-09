const flipNumber = n => {
    let count = 1
    let num = [...n].reverse()
    while (count < n.length) {
      num = [...num.slice(0, count), ...num.slice(count).reverse()]
      count++
    }
    return num.join('')
  }