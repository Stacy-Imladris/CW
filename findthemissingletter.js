function findMissingLetter(array){
  let ind = array.findIndex((f, i) => i !== 0 && array[i - 1].charCodeAt() !== f.charCodeAt() - 1)
  return String.fromCharCode(array[ind].charCodeAt() - 1)
}