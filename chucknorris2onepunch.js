const onePunch = items => items && typeof items === 'string' ? items.split(' ').sort((a, b) => a > b ? 1 : -1).map(m => m.replace(/[ae]/gi, '')).join(' ') : 'Broken!'