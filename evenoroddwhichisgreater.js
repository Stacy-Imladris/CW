function evenOrOdd(str) {
  let [odd, even] = str.split('').map(Number).reduce((arr, r) => {
    r % 2 ? arr[0] += r : arr[1] += r
    return arr
  }, [0, 0])
  return odd > even ? "Odd is greater than Even" 
  : odd < even ? "Even is greater than Odd" 
  : "Even and Odd are the same"
}