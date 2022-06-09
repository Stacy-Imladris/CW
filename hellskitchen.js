const gordon = a => a.toUpperCase().split(' ')
    .map(m => [...m].map(el => el === 'A' ? '@' : 'OUEI'.includes(el) ? '*' : el).join('') + '!!!!').join(' ')