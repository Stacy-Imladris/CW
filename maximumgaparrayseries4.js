function maxGap (numbers){
  return Math.max(...numbers.sort((a, b) => a - b)
                  .map((m, i, arr) => i !== 0 ? m - arr[i - 1] : m).slice(1))
}