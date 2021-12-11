function accum(s) {
	let arr = s.split('');
  let result = [];
  result.push(arr[0].toUpperCase(), "-");
  for (let i = 1; i < arr.length; i++){
    result.push(arr[i].toUpperCase(), arr[i].toLowerCase().repeat(i), "-");
  }
  result.pop();
  return result.join('');
}