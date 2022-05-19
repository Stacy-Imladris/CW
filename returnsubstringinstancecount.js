function solution(fullText, searchText){
  let res = 0
  while (fullText.indexOf(searchText) > -1) {
    fullText = fullText.replace(searchText, '')
    res++
  }
  return res
}