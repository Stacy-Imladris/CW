function meeting(x, need){
    let arr = x.map(m => m[1] - m[0].length > 0 ? m[1] - m[0].length : 0)
    let num = need
    return need === 0 ? 'Game On' : arr.reduce((acc, r) => acc + r) < need ? 'Not enough!' : arr.reduce((res, r) => {
      if (num > 0) {
        res.push(r > num ? num : r)
        num -= r
      }
      return res
    }, [])
  }