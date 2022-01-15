const swap = (string) => string.split('')
.map(i => 'aeiou'.includes(i) ? i.toUpperCase() : i).join('')