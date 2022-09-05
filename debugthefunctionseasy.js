const multi = arr => arr.reduce((acc, r) => acc * r, 1)
const add = arr => arr.reduce((acc, r) => acc + r)
const reverse = str => [...str].reverse().join('')