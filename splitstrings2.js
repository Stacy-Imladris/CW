function solution(str){
  if (!str) return []
  let res = []
  if (str.length >= 2) res = str.match(/../g)
  if (str.length % 2) res.push(`${str[str.length - 1]}_`)
  return res
}