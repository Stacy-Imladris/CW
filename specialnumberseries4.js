function jumpingNumber(n){
  return [...n.toString()].every((e, i, arr) => i === 0 || Math.abs(arr[i - 1] - e) === 1)
    ? 'Jumping!!' : 'Not!!'
}