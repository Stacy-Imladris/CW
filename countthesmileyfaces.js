function countSmileys(arr) {
  let smiles = [':)', ':D', ';)', ';D', ';-D', ';-)', ';~D', ';~)', ':-D', ':-)', ':~D', ':~)']
  return arr.filter(f => smiles.includes(f)).length
}