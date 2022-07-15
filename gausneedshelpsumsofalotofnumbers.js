const f = n => Number.isInteger(n) && Math.sign(n) === 1 
    && Array(n).fill(0).map((m, i) => i + 1).reduce((acc, r) => acc + r)