function generateShape(integer){
    let el = '+'.repeat(integer)
    return Array(integer).fill(el).join('\n')
  }