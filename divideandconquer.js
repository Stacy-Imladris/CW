function divCon(x){
    const getSum = (arr, type) => x.filter(f => typeof f === type).reduce((acc, r) => +r + acc, 0)
    return getSum(x, 'number') - getSum(x, 'string')
  }