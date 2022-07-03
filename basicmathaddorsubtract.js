function calculate(str) {
  const actions = str.split(/[0-9]/).filter(f => f)
  const nums = str.split(/plus|minus/).map(Number)
  return nums.reduce((res, r, i, arr) => i === nums.length - 1 ? res 
                     : actions[i] === 'plus' ? res + arr[i + 1] : res - arr[i + 1], nums[0]) + ''
}