function remove(s){
    let arr = s.split('');
    if (arr[arr.length - 1] === "!"){
      arr.pop();
      return arr.join('');
    }
    else return arr.join('');
  }