const oddOrEven = (array) => {
    let sum = array.reduce((sum, r) => sum += r, 0)
    return sum % 2 === 0 || sum === 0 ? 'even' : 'odd'
 }