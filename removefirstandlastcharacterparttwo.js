function array(arr){
    let array = arr.split(',')
    array.pop();
    array.shift()
    return array.join(' ') ? array.join(' ') : null
  }
  