function dotCalculator (equation) {
  let arr = equation.split(' ')
	return arr[1] === '+' ? '.'.repeat(arr[0].length + arr[2].length) : arr[1] === '-' ? '.'.repeat(arr[0].length - arr[2].length) :
    arr[1] === '*' ? '.'.repeat(arr[0].length * arr[2].length) : '.'.repeat(arr[0].length / arr[2].length)
}