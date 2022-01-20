function billboard(name, price = 30){
  let result = 0
  for (let i = 1; i <= name.length; i++){
    result += price ? price : 30
  }
  return result
} 