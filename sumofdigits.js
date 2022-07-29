const sum = digits => digits !== undefined
    ? `${[...digits.toString()].join(' + ')} = ${[...digits.toString()].reduce((acc, r) => +r + acc, 0)}` : ''