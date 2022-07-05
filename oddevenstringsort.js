const sortMyString = s => `${[...s].filter((f, i) => !(i % 2))
    .join('')} ${[...s].filter((f, i) => i % 2).join('')}`