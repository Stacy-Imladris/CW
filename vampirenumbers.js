let vampire_test = function(a, b){
    const getOnes = num => num.toString().split('').filter(f => f === '1').length
    return getOnes(a * b) === getOnes('' + a + b) && (a > 0 || b > 0)
  }