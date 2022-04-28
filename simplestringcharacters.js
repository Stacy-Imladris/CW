function solve(s){
  let obj = {up: 0, low: 0, num: 0, char: 0}
  s.split('').forEach(char => {
    if (!isNaN(+char)) {
      obj.num += 1
      return
    }
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      obj.low += 1
      return
    }
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      obj.up += 1
      return
    }
    obj.char += 1
    return
  })
  return Object.values(obj)
}