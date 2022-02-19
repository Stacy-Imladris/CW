const getDivisorsCnt = (n) => {
    let arr = []
    for (let i = 1; i <= n; i++){
      Number.isInteger(n / i) && arr.push(i)
    }
   return arr.length
 }