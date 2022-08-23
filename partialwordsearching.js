function wordSearch(query, seq){
  let res = seq.filter(f => f.toLowerCase().includes(query.toLowerCase()))
  return res.length ? res : ['Empty']
}