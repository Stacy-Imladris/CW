const sentencify = (words) => words.map((m, i) => i === 0 ? m[0].toUpperCase() + m.slice(1) : m).join(' ') + '.'