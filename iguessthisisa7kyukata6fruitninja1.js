function cutFruits(fruits){
  let arr = fruits.map(m => fruitsName.includes(m) ? 
                       [m.substring(0, Math.ceil(m.length / 2)), m.substring(Math.ceil(m.length / 2))] : m)
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res = Array.isArray(arr[i]) ? [...res, ...arr[i]] : [...res, arr[i]] 
  }
  return res
}