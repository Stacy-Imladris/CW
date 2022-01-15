const alphabetPosition = (text) => text.toLowerCase().replace(/[^a-z]/g, '')
.split('').map(i => i.charCodeAt(0) - 96).join(' ')