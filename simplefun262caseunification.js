function caseUnification(s) {
    let upCount = [...s].filter(f => f.toUpperCase() === f).length
    let lowCount = [...s].filter(f => f.toLowerCase() === f).length
    return upCount > lowCount ? s.toUpperCase() : s.toLowerCase()
  }