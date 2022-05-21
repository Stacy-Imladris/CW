function solution(str){
  let res = []
  let arr = [...str]
  let count = 0
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    res.push(arr[count] + arr[count + 1])
    count += 2
  }
  if (str.length % 2 === 1) res.splice(res.length, 0, arr.slice(-1) + '_')
  return res
}