const inArray = (arr1, arr2) => arr1.filter(f => arr2.some(s => s.includes(f))).sort((a, b) => a > b ? 1 : -1)