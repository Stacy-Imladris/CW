const initials = n => n.split(' ')
    .map((m, i, arr) => i === arr.length - 1 ? m[0].toUpperCase() + m.substring(1) : m[0].toUpperCase())
    .join('.')