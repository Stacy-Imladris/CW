function correct(string){
	let arr = string.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === "0"){
      result.push("O");
    }
    else if (arr[i] === "5"){
      result.push("S");
    }
    else if (arr[i] === "1"){
      result.push("I");
    }
    else result.push(arr[i]);
  }
  return result.join('');
}