const dropCap = (n) => n.split(' ').map(m => m.length > 2 ? m[0].toUpperCase() + m.slice(1).toLowerCase() : m).join(' ')