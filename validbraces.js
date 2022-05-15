function validBraces(braces){
    let arr = [...braces]
    let stack = []
    for (let i = 0; i < arr.length; i++) {
      if ('({['.includes(arr[i])){
        stack.push(arr[i])
      } else {
        if (stack[stack.length - 1] === '(' && arr[i] === ')' 
            || stack[stack.length - 1] === '{' && arr[i] === '}' 
            || stack[stack.length - 1] === '[' && arr[i] === ']') {
          stack.pop()
        } else {
          return false
        }
      }
    }
    return !stack.length
  }