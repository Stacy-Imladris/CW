const isValid = (formula) => formula.filter(f => f === 7 || f === 8).length > 0 &&
    formula.filter(f => f === 1 || f === 2).length <= 1 && 
    formula.filter(f => f === 3 || f === 4).length <= 1 &&
    formula.filter(f => f === 5 || f === 6).length !== 1