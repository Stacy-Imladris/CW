const sentence = List => List.map(m => Object.entries(m)[0])
    .sort((a, b) => +a[0] > +b[0] ? 1 : -1).map(m => m[1]).join(' ')