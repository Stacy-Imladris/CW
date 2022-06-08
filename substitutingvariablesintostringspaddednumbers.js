function solution(value){
  let l = value.toString().length
  return `Value is ${'0'.repeat(5 - l) + value}`
}