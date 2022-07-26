function solve(str){
    let arr = str.split(' ').map(m => m.length)
    let temp = [...str.replace(/ /g, '')].reverse()
    return arr.map(m => {
      let res = temp.slice(0, m)
      temp = temp.slice(m)
      return res.join('')
    }).join(' ')
 }