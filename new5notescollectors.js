function getNewNotes(salary, bills){
    let sum = bills.length ? bills.reduce((acc, r) => acc + r) : 0
    let rest = salary - sum
    return rest > 0 ? Math.floor(rest / 5) : 0
  }