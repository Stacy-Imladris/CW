function mirror(data) {
    if (!data.length || data.length === 1) return data
    let arr = [...data].sort((a, b) => a - b)
    return arr.concat([...arr].reverse().slice(1))
  }