const solve = (st, a, b) => {
    let arr = [...st]
    let rev = [...st.substring(a, b + 1)].reverse().join('')
    arr.splice(a, rev.length, rev)
    return arr.join('')
  }