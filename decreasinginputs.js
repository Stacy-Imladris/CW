function add(){
    let arr = [...arguments]
    return arr.length 
      ? Math.round(arr.map((m, i) => m / (i + 1)).reduce((acc, r) => +r + acc, 0)): 0
  }