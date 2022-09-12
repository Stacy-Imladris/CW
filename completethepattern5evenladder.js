function pattern(n){
    let output = []
    let count = 2
      while (count <= n) {
        output.push(count.toString().repeat(count))
        count = count + 2
      }
    return output.join('\n')
   }