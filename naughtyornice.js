const getNiceNames = people => people.filter(f => f.wasNice).map(m => m.name)

const getNaughtyNames = people => people.filter(f => !f.wasNice).map(m => m.name)