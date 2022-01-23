function multiTable(number) {
    let result = []
    for (let i = 1; i <= 10; i++){
      let m = i * number;
      result.push(i + ' * ' + number + ' = ' + m)
    }
    return result.join('\n')
  }