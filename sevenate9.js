function sevenAte9(str){
  if (!str.includes('797')) return str
  return sevenAte9(str.replace(/797/g, '77'))
}