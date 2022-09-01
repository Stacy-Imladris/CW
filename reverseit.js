function reverseIt(data){
    if (!['number', 'string'].includes(typeof data)) return data
    let res = [...data.toString()].reverse().join('')
    return typeof data === 'number' ? +res : res
  }