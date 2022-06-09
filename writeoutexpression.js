function expressionOut(expr) {
    const obj = {'+': 'Plus', '-': 'Minus', '*': 'Times', '/': 'Divided By',
                 '**': 'To The Power Of', '=': 'Equals', '!=': 'Does Not Equal',
                '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five',
                 '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine', '10': 'Ten'}
    let arr = expr.split(' ')
    return !arr.every((e, i, arr) => obj[e]) || !['+', '-', '*', '/', '**', '=', '!='].includes(arr[1]) 
      ? 'That\'s not an operator!' : arr.map(m => obj[m]).join(' ')
  }