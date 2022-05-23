const comes_after = (str, l) => [...str].filter((f, i, arr) => arr[i - 1] === l.toUpperCase() || arr[i - 1] === l.toLowerCase())
    .join('').replace(/[^a-zA-Z]/gi, '')