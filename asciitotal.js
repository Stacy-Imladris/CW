const uniTotal = (string) => string ? string.split('').reduce((sum, i) => sum + i.charCodeAt(0), 0) : 0