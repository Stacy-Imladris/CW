const addUsername = (list) => list.map(m => ({...m, username: (m.firstName + m.lastName[0] + (new Date().getFullYear() - m.age)).toLowerCase()}))
